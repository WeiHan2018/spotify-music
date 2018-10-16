import { Component, OnInit } from '@angular/core';

import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchText: string;
  tracksInfo: any;

  constructor(private spotifyService: SpotifyService) {

  }

  ngOnInit() {
  }

  searchTrack() {
    if (this.searchText.length <= 0) {
      return;
    }

    this.spotifyService.searchTrack(this.searchText).subscribe(
      response => {
        if (response === null) {
          return;
        }

        console.log("Get tracks successfully");
        console.log(response);
        this.tracksInfo = response.tracks.items;
        console.log(this.tracksInfo);
      },
      error => {
        console.log(error);
      }
    );
  }

}
