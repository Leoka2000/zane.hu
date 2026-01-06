import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core'; // Import this
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";

@Component({
  selector: 'app-about-hero',
  standalone: true,
  imports: [CommonModule, MatIconModule, PrimaryButtonComponent, TranslateModule],
  templateUrl: './about-hero.component.html',
})
export class AboutHeroComponent {
  // Use keys from your JSON here
  stats = [
    { label: 'ABOUT_HERO.STATS.FOUNDED', value: '2012' },
    { label: 'ABOUT_HERO.STATS.SATISFACTION', value: '126' },
    { label: 'ABOUT_HERO.STATS.CLIENTS', value: '87+' }
  ];

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}