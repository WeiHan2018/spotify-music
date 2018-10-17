import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artistId: string;
  artist: any;

  constructor(private route: ActivatedRoute, private location: Location, private spotifyService: SpotifyService) { 
    route.params.subscribe(params => { this.artistId = params['id']; });
  }

  ngOnInit() {
    this.spotifyService.searchArtist(this.artistId).subscribe(
      response => {
        if (response === null) {
          return;
        }

        console.log('Get artist successfully!');
        console.log(response);

        this.artist = response;
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
