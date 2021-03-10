import { Component, OnInit } from '@angular/core';
import {Photo} from '../models';
import {ActivatedRoute} from '@angular/router';
import {AlbumsService} from '../albums.service';

@Component({
  selector: 'app-album-photos-detail',
  templateUrl: './album-photos-detail.component.html',
  styleUrls: ['./album-photos-detail.component.css']
})
export class AlbumPhotosDetailComponent implements OnInit {
  photos: Photo[]
  loading: boolean
  imageInLargeScale: string

  constructor(private route: ActivatedRoute,
              private albumsService: AlbumsService) {
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params) => {
      const id = +params.get('id');
      const photoId = +params.get('photoId');
      this.getPhotos(id, photoId);
    });
  }

  getPhotos(id: number, photoId: number) {
    this.loading = true;
    this.albumsService.getPhotos(id).subscribe((x) => {
      this.photos = x.filter((a) => a.id === photoId);
      this.loading = false;
    })
  }

}
