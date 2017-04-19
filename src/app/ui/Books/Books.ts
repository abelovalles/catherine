/**
 * Created by AbelRicardo on 4/18/2017.
 */
import { Component } from '@angular/core' ;
import {Router} from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: 'Books.html',
  styleUrls: ['Books.css']
})

export class BooksUiComponent {

  constructor( private router: Router){
  }
  verlibro(): void {
    this.router.navigate(['/detalle']);
  }
}
