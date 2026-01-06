import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core'; 

@Component({
  selector: 'app-services-hero',
  standalone: true,
  imports: [CommonModule, MatIconModule, TranslateModule], 
  templateUrl: './services-hero.component.html',
})
export class ServicesHeroComponent {
}