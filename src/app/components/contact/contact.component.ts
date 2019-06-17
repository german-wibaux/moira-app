import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onNotification() {
    alert('Esta funcionalidad no se encuentra disponible, por favor comunicarse al numero de telefono que se encuentra en el pie de la pagina')
  }

}
