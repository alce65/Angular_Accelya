import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Contacto } from '../models/contactos.model';
import { URLAPI } from '../../environments/environment';

// El servicio contactos se ocupa de almacenar la lista de contactos


@Injectable()
export class ContactosService {

    private sURL: string;
    private aContactos: Array<Contacto>;

    constructor (public http: HttpClient) {
        this.sURL = URLAPI;
        this.aContactos = [];
    }

    getContactos() {
        // const aLibros: Array<string>  = [];
        return this.http.get(this.sURL).toPromise()
        .then((response: any) => {
          this.aContactos = response;
          return this.aContactos;
        });
    }

    getContactos$(): Observable<Array<Contacto>> {
        // const aLibros: Array<string>  = [];
        // return this.http.get(this.sURL);
        return this.http.get<Contacto[]>(this.sURL);
    }

    setContactos(oContacto) {
        console.log('Enviando datos');
        console.log(oContacto);
        return this.http.post(this.sURL, oContacto).toPromise();
    }

    //  Metodo Post
    setContactos$(oContacto): Observable<any> {
        console.log('Enviando datos');
        console.log(oContacto);
        return this.http.post(this.sURL, oContacto);
    }

    deleteContacto (i) {
        i++;
        return this.http.delete(this.sURL + '/' + i).toPromise();
        // this.aContactos.splice(i, 1);
      }

    deleteContacto$(i): Observable<any> {
      i++;
      return this.http.delete(this.sURL + '/' + i);
      // this.aContactos.splice(i, 1);
    }
}
