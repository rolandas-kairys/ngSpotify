import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// using observables to use for subribed data
// for this we need map operator
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  

  constructor( private _hhtp: Http ) {


   }
  private searchUrl: string;
   searchMusic(str:string, type='artist'){
     this.searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' +type+ '&market=US';
     return this._hhtp.get(this.searchUrl)
     .map(res => res.json());
  }

  private artistUrl: string;
    getArtist(id: string){
      this.artistUrl = 'https://api.spotify.com/v1/artists/'+id;
        return this._hhtp.get(this.artistUrl)
          .map(res => res.json());
    }

  private albumsUrl: string;
    getAlbums(artistId: string){
      this.albumsUrl = 'https://api.spotify.com/v1/artists/'+artistId+ '/albums';
        return this._hhtp.get(this.albumsUrl)
          .map(res => res.json());
    }
  private albumUrl: string;
    getAlbum(id: string){
      this.albumUrl = 'https://api.spotify.com/v1/albums/'+id;
        return this._hhtp.get(this.albumUrl)
          .map(res => res.json());
    }



}
