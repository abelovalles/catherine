import { ModuleWithProviders }  from '@angular/core';
import {Routes , RouterModule} from '@angular/router';
import {QuienesSomosUiComponent} from '../QuienesSomos/QuienesSomos';
import { AppSliderUiComponent } from '../slider/SliderUiComponent';
import { HomeBlogUiComponent } from '../Blog/HomeBlog';
/**
 * Created by AbelRicardo on 1/31/2017.
 */

export const routerConfig: Routes = [

  {
    path: 'home',
    component: HomeBlogUiComponent
  },
  {
    path: 'services',
    component: QuienesSomosUiComponent
  },
  {
    path: 'ourjobs',
    component: QuienesSomosUiComponent
  },
  {
    path: 'ourclients',
    component: QuienesSomosUiComponent
  },
  {
    path: 'contact',
    component: QuienesSomosUiComponent
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


