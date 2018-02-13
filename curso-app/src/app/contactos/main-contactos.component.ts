import { Component, OnInit } from '@angular/core';
import { Contacto } from '../models/contactos.model';
import { ContactosService } from '../services/contactos.service';

@Component({
  selector: 'acc-main-contactos',
  templateUrl: './main-contactos.component.html',
  styles: ['.main { min-height: 30rem; }']
})
export class MainContactosComponent implements OnInit {

  aContactos: Array<Contacto>;
  sContacto: string;

  constructor(public contactosService: ContactosService) { }

  ngOnInit() {
    this.aContactos = [];
    /* this.contactosService.getContactos().then(
       response =>  this.aContactos = response
     ); */
     this.contactosService.getContactos$().subscribe(
      response =>  this.aContactos = response
    );
  }

  // respuesta a los eventos en el componente lista
  deleteContacto (i) {
    /* this.contactosService.deleteContacto(i)
    .then(
      () => {this.contactosService.getContactos()
        .then(response =>  this.aContactos = response);
      }); */
      this.contactosService.deleteContacto$(i)
      .subscribe(
        () => {this.contactosService.getContactos$()
          .subscribe(response =>  this.aContactos = response);
        });


    // TODO hacer que lista se actualice con los nuevos datos
  }

  // respuesta a los eventos en el componente altas
  addContacto (oContacto) {
    /* this.contactosService.setContactos(oContacto)
    .then(
      () => {this.contactosService.getContactos()
        .then(response =>  this.aContactos = response);
      }); */
    this.contactosService.setContactos$(oContacto)
    .subscribe(
      () => {this.contactosService.getContactos$()
        .subscribe(response =>  this.aContactos = response);
      });
  }
}

