/**
 * Created by AbelRicardo on 3/29/2017.
 */
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';
import { ObInfoRestService } from './ObInfoRestService';

@Component({
  selector: 'app-register',
  templateUrl: 'register.html',
  styleUrls: ['register.css'],
  providers: [ ObInfoRestService ]
})

export class RegisterComponent {
  complexForm: FormGroup;
  fnametag = 'First Name';
  snametag = ' Middle Name';
  flastnametag = 'Paternal Surname';
  slastnametag = 'Maternal Surname';
  fechanacimientotag = 'Birth Date';
  usuariotag = 'User Name';
  ciudadtag = 'City';
  estadotag = 'State';
  clave1tag = 'Password';
  clave2tag = 'Reenter Password';

  public estados: Array<Object>;
  botontag = 'Register';

  constructor(fb: FormBuilder, private _httpservices: ObInfoRestService, private router: Router) {
    // Aqui estamos utiulizando el FormBuilder para armar nuestro formularioi
    this.complexForm = fb.group({
      // pdemos setear valores por defecto pasandole los valores correspondientes
      'pNombre': '',
      'sNombre': '',
      'pApellido' : '',
      'sApellido' : '',
      'fechaNacimiento' : '',
      'nombreUsuario' : '',
      'ciudad' : '',
      'estado' : '',
      'contraseña' : ''
    });

  }

  obtenerEstados ( codigoJson: Object) {
    console.log(codigoJson);
    /*console.log(this.codigo);*/
    this._httpservices.getEstados( codigoJson ).subscribe(
      (data) => {
        this.estados = data.RestResponse.result;
        console.log(this.estados);
      },
      (error) => alert(error),
      () => console.log('Finished')
    );
  }

  submitForm(value: any): void {
    console.log('Reactive FormData');
    console.log(value);
  }

}
