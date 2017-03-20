import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {
  MaterialRootModule,
  OverlayContainer,
  FullscreenOverlayContainer,
  MdSelectionModule,
} from '@angular/material';
// / Luego agrego el componenete que realizamos
import { AppMainContainerComponent } from './container/MainContainerComponent';
import { AppBarUiComponent } from  './ui/MenuBar/NavBarUiComponent';
import { AppSliderUiComponent } from './ui/slider/SliderUiComponent';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { QuienesSomosUiComponent } from './ui/QuienesSomos/QuienesSomos';
import { HomeBlogUiComponent } from './ui/Blog/HomeBlog';
import { routing } from './ui/MenuBar/NavBarUiComponentConfig';

@NgModule({
  declarations: [
    AppMainContainerComponent,
    AppBarUiComponent,
    AppSliderUiComponent,
    QuienesSomosUiComponent,
    HomeBlogUiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    JsonpModule,
    routing ,
    MaterialRootModule,
    MdSelectionModule
  ],
  providers: [
    {provide: OverlayContainer, useClass: FullscreenOverlayContainer}
  ],
  bootstrap: [ AppMainContainerComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
