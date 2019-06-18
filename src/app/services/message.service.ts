import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private _http: HttpClient) {}

  sendMessage(query) {

    let base = 'https://us-central1-node-app-372ef.cloudfunctions.net/sendMailMoira?';
    let url = base + 'email=' + query.email + '&asunto=' + query.asunto + '&mensaje=' + query.mensaje + '&telefono=' + query.telefono ; 
    // '&mensaje=' + query.mensaje + '&consultat=' + query.consultat + '&telefono=' + query.telefono;
    //let _body = 'email=germanwibaux@gmail.com&mensaje=hola queria consulasknda akjsbdnaius bnialsu nbolauis dnbpuiasnd bpaiosud &asunto=presupuestar mi casa';
    
    return this._http.post(url ,{responseType: 'text'}).subscribe( result => {
        //console.log('Enviado');
      } ); 
  }

  

}
