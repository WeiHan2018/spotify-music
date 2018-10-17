import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  trackId: string;
  track: any;

  constructor(private route: ActivatedRoute, private spotifyService: SpotifyService, private location: Location) { 
    route.params.subscribe(params => { this.trackId = params['id']; });
  }

  ngOnInit() {
    this.spotifyService.searchTrackDetail(this.trackId).subscribe(
      response => {
        console.log('Get track details successfully!');
        console.log(response);
        this.track = response;
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
