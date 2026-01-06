import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core'; 
import { BgShadesComponent } from "../../../shades/bg-shades/bg-shades.component";
import { BelowBgShadesComponent } from "../../../shades/below-bg-shades/below-bg-shades.component";

@Component({
  selector: 'app-about-zane-house',
  standalone: true,
  imports: [TranslateModule, BgShadesComponent, BelowBgShadesComponent], 
  templateUrl: './about-zane-house.component.html',
  styles: ``
})
export class AboutZaneHouseComponent {}