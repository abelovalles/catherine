/**
 * Created by AbelRicardo on 1/31/2017.
 */
import { ModuleWithProviders }  from '@angular/core';
import {Routes , RouterModule} from '@angular/router';
import {QuienesSomosUiComponent} from '../QuienesSomos/QuienesSomos';
import { AppSliderUiComponent } from '../slider/SliderUiComponent';
import { HomeBlogUiComponent } from '../Blog/HomeBlog';
import { LoginComponent } from '../login/login';
import { RegisterComponent } from '../register/register';
import { ContactanosComponent } from '../Contactanos/Contactanos';
import { PostUiComponent } from '../Blog/post';

export const routerConfig: Routes = [

  {
    path: 'home',
    component: QuienesSomosUiComponent
  },
  {
    path: 'osito',
    component: HomeBlogUiComponent
  },
  {
    path: 'intercambio',
    component: QuienesSomosUiComponent
  },
  {
    path: 'involucrate',
    component: QuienesSomosUiComponent
  },
  {
    path: 'contact',
    component: ContactanosComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'osito/post',
    component: PostUiComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routerConfig);


