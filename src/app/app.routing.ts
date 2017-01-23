import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';


const appRoutes: Routes = [
    {
        path: '', // represents home page
        component: SearchComponent
    },
    {
        path: 'about', // represents about page
        component: AboutComponent
    },
     {
        path: 'artist/:id', // represents artist page
        component: ArtistComponent
    },
    {
        path: 'album/:id', // represents album page
        component: AlbumComponent
    }

]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);