import { Component } from '@angular/core';
import { SecondaryButtonComponent } from '../../../components/secondary-button/secondary-button.component';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';
import { MatIconModule } from '@angular/material/icon';
import { BadgeComponent } from '../../../components/ui/badge/badge.component';
import { GreenShadesComponent } from "../../../components/utils/green-shades/green-shades.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [SecondaryButtonComponent, PrimaryButtonComponent, MatIconModule, BadgeComponent, GreenShadesComponent],
  templateUrl: './hero.component.html',
  styles: ``
})
export class HeroComponent {

}
