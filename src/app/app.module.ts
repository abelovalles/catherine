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
import { LoginComponent } from './ui/login/login';
import { RegisterComponent } from './ui/register/register';
import { ContactanosComponent } from './ui/Contactanos/Contactanos';
import { PostUiComponent }  from './ui/Blog/post';
import { BooksUiComponent } from './ui/Books/Books';
import { BookDetailUiComponent } from './ui/BookDetail/BookDetail';


@NgModule({
  declarations: [
    AppMainContainerComponent,
    AppBarUiComponent,
    AppSliderUiComponent,
    QuienesSomosUiComponent,
    HomeBlogUiComponent,
    LoginComponent,
    RegisterComponent,
    ContactanosComponent,
    PostUiComponent,
    BooksUiComponent,
    BookDetailUiComponent
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
