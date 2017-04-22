import { Playlist } from './playlist';

export class Cancion {
      nombre: string;
    autor: string;
    tag: string;
    url: string;
    playlist: Playlist;

    constructor(u: any = {}) {
        this.nombre = u.nombre;
        this.autor = u.autor;
        this.tag = u.tag;
        this.url = u.url;
        if (u.playlist) {
            this.playlist = new Playlist(u.playlist);
        }
    }
}
