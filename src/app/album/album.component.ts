import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  albumId: string;
  album: any;

  constructor(private route: ActivatedRoute, private spotifyService: SpotifyService, private location: Location) {
    route.params.subscribe(params => { this.albumId = params['id']; });
  }

  ngOnInit() {
    this.spotifyService.searchAlbum(this.albumId).subscribe(
      response => {
        console.log('Get album successfully!');
        console.log(response);
        this.album = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  goBack() {
    this.location.back();
  }
}
