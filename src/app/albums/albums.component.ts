import { Component, OnInit } from '@angular/core';
import {Album, Photo} from '../models';
import {AlbumsService} from '../albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[];
  photos: Photo[];
  loading: boolean;
  adding: boolean;
  addId: string;
  userId: string;
  title: string;

  constructor(private albumsService: AlbumsService) { }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums() {
    this.loading = true;
    this.albumsService.getAlbums().subscribe((albums) => {
      this.albums = albums;
      this.loading = false;
    });
  }

  deleteAlbum(id: number) {
    this.albums = this.albums.filter((x) => x.id !== id);
    this.albumsService.deleteAlbum(id).subscribe();
  }

  addAlbum() {
    const alb: Album = new Album(+this.addId, +this.userId, this.title);
    this.albumsService.addAlbum(alb).subscribe();
    this.albums.push(alb);
    this.adding = false;
  }

}
