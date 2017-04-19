/**
 * Created by AbelRicardo on 4/18/2017.
 */
import { Component } from '@angular/core' ;
import {Router} from '@angular/router';

@Component({
  selector: 'app-bookdetail',
  templateUrl: 'BookDetail.html',
  styleUrls: ['BookDetail.css']
})

export class BookDetailUiComponent {

  constructor( private router: Router){
  }
  verlibro(): void {
    this.router.navigate(['/osito/post']);
  }
}
