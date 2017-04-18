/**
 * Created by AbelRicardo on 3/13/2017.
 */
import { Component } from '@angular/core' ;
import {Router} from '@angular/router';

@Component({
  selector: 'app-homeblog',
  templateUrl: 'HomeBlog.html',
  styleUrls: ['HomeBlog.css']
})

export class HomeBlogUiComponent {
  titulosporfecha= ['pureba', 'prueba1', 'prueba2'];

  constructor( private router: Router){

  }
  verpost() : void {
    this.router.navigate(['/osito/post']);
  }
}
