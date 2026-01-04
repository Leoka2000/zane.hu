import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-services-hero',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './services-hero.component.html',
 
})
export class ServicesHeroComponent {
  // A komponens logikája itt bővíthető szükség esetén
}