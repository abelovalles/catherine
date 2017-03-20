/**
 * Created by AbelRicardo on 1/26/2017.
 */
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-bar',
  templateUrl: 'NavBarUiComponent.html',
  styleUrls: ['NavBarUiComponent.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppBarUiComponent {
  side = 'start';
}

