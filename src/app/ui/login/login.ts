/**
 * Created by AbelRicardo on 3/25/2017.
 */
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';
import { ObInfoRestService } from './ObInfoRestService';


@Component({
  selector: 'app-login',
  templateUrl: 'login.html',
  styleUrls: ['login.css'],
  providers: [ ObInfoRestService ]
})

export class LoginComponent {
  complexForm: FormGroup;
  usertag = 'User';
  contratag = ' Password';
  botontag = 'Login';
  constructor(fb: FormBuilder, private _httpservices: ObInfoRestService, private router: Router) {
    // Aqui estamos utiulizando el FormBuilder para armar nuestro formularioi
    this.complexForm = fb.group({
      // pdemos setear valores por defecto pasandole los valores correspondientes
      'usuario': '',
      'contraseña': ''
    });

  }

  submitForm(value: any): void {
    console.log('Reactive FormData');
     console.log(value);
    this.router.navigate(['/register']);
  }

}
