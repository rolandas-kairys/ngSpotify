import { Component } from '@angular/core';

// importing spotify service
import { SpotifyService } from '../../services/spotify.service';

import { Artist } from '../../../Artist';

@Component({
  selector: 'spo-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

      // service must be injected through constructor
  constructor(private _spotifyService: SpotifyService) { }

  searchRes: Artist[];
  searchStr: string;
    searchMusic(){
      this._spotifyService.searchMusic(this.searchStr).subscribe(res => {
         this.searchRes = res.artists.items;
      }); //to this observable must be subsribed
      }





 

}
