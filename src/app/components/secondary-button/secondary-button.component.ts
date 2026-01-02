import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-secondary-button',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './secondary-button.component.html',
  styles: [`
    .grotesk {
      font-family: 'Space Grotesk', sans-serif;
    }
  
    mat-icon {
      transform-origin: center;
    }
  `]
})
export class SecondaryButtonComponent {}