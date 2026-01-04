import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";

@Component({
  selector: 'app-about-hero',
  standalone: true,
  imports: [CommonModule, MatIconModule, PrimaryButtonComponent, MatIconModule],
  templateUrl: './about-hero.component.html',
 /*  styles: [`
    .grotesk {
      font-family: 'Space Grotesk', sans-serif;
    }
  `] */
})
export class AboutHeroComponent {
  stats = [
    { label: 'Alapítva', value: '2012' },
    { label: 'Elégedettségi mutató', value: '126' },
    { label: 'Elégedett ügyfél', value: '87+' }
  ];
}