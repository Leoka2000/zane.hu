import { Component } from '@angular/core';

import { HeroComponent } from "./hero/hero.component";
import { FeaturesTopComponent } from "./features-top/features-top.component";
import { FeaturesComponent } from "../../features/features.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, FeaturesTopComponent, FeaturesComponent],
  templateUrl: './home.component.html',

})
export class HomeComponent {

}
