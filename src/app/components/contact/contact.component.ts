import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private router: Router,
              public _MessageService: MessageService) { }

  ngOnInit() {
  }

  contactForm(form) {
    // this._MessageService.sendMessage(form).subscribe(() => {
    //   Swal.fire({
    //     title: 'Formulario de contacto',
    //     text: 'Mensaje enviado correctamente',
    //     type: 'success',
    //     confirmButtonText: 'Cool'
    //   })
    // });
    //console.log(form);
    this._MessageService.sendMessage(form);
    alert('El mensaje ha sido enviado');
     
  }

}
