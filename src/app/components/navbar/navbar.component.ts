import { Component } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [PrimaryButtonComponent],
  templateUrl: './navbar.component.html',
  styles: ``
})
export class NavbarComponent {

}
