import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-primary-button',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './primary-button.component.html',

})
export class PrimaryButtonComponent {

}
