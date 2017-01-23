
// this is a model of what an ARTIST is

import { Album } from './Album'; 

export class Artist{
    id: number;
    name: string;
    genres: any;
    albums: Album[];
}