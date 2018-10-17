import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';

import { SpotifyAPIKey } from '../environments/spotifyApiKey';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  BASE_URL = 'https://api.spotify.com/v1';

  constructor(private http: Http) { }

  searchTrack(trackName: string): Observable<any> {
    let params: string = [
      `q=${trackName}`,
      `type=track`
    ].join("&");

    let queryUrl = `${this.BASE_URL}/search?${params}`;

    return this.search(queryUrl);
  }

  searchArtist(artistId: string): Observable<any> {
    let queryUrl = `${this.BASE_URL}/artists/${artistId}`;

    return this.search(queryUrl);
  }

  searchTrackDetail(trackId: string): Observable<any> {
    let queryUrl = `${this.BASE_URL}/tracks/${trackId}`;
    
    return this.search(queryUrl);
  }

  search(queryUrl: string): Observable<any> {
    const apiKey = SpotifyAPIKey;
    const headers = new Headers({
      Authorization: `Bearer ${apiKey}`
    });
    const options = new RequestOptions({
      headers: headers
    });

    return this.http.request(queryUrl, options).map((res: any) => res.json());
  }
}
