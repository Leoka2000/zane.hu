import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core'; 

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [MatIconModule, TranslateModule], 
  templateUrl: './badge.component.html',
  styles: ``
})
export class BadgeComponent {
  // Alapértelmezett értéknek megadjuk a fordítási kulcsot
  @Input() text: string = 'badge.TRUST_TEXT'; 
}