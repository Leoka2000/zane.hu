import { Component } from '@angular/core';
import { PrimaryButtonComponent } from '../../components/primary-button/primary-button.component';
import { SecondaryButtonComponent } from "../../components/secondary-button/secondary-button.component";
import { BadgeComponent } from '../../components/ui/badge/badge.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PrimaryButtonComponent, SecondaryButtonComponent, BadgeComponent],
  templateUrl: './home.component.html',

})
export class HomeComponent {

}
