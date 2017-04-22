export class Playlist {
      id: string;
    nombre: string;
   

    constructor(u: any = {}) {
        this.id = u._id;
        this.nombre = u.nombre;
        
    }
}
