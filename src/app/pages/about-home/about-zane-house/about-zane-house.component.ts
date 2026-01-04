import { Component } from '@angular/core';
import { BgShadesComponent } from "../../../shades/bg-shades/bg-shades.component";
import { BelowBgShadesComponent } from "../../../shades/below-bg-shades/below-bg-shades.component";

@Component({
  selector: 'app-about-zane-house',
  standalone: true,
  imports: [BgShadesComponent, BelowBgShadesComponent],
  templateUrl: './about-zane-house.component.html',
  styles: ``
})
export class AboutZaneHouseComponent {

}
