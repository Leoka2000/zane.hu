import { Component } from '@angular/core';

import { HeroComponent } from "./hero/hero.component";
import { FeaturesTopComponent } from "./features-top/features-top.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, FeaturesTopComponent],
  templateUrl: './home.component.html',

})
export class HomeComponent {

}
