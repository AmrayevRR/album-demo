import { Component, OnInit } from '@angular/core';
import {Photo} from '../models';
import {ActivatedRoute} from '@angular/router';
import {AlbumsService} from '../albums.service';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[]
  loading: boolean

  constructor(private route: ActivatedRoute,
              private albumsService: AlbumsService) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params) => {
      const id = +params.get('id');
      this.getPhotos(id);
    });
  }

  getPhotos(id: number) {
    this.loading = true;
    this.albumsService.getPhotos(id).subscribe((x) => {
      this.photos = x;
      this.loading = false;
    })
  }

}
