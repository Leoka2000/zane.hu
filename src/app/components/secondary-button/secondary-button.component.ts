import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'; // ✅ Új import
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-secondary-button',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, CommonModule],
  templateUrl: './secondary-button.component.html',
  styles: [`
    .zane-secondary {
      /* Glassmorphism alapstílus */
      background-color: rgba(255, 255, 255, 0.03) !important;
      border: 2px solid rgba(255, 255, 255, 0.15) !important;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border-radius: 6px !important;
      padding: 0.70rem 1.5rem !important;
      transition: all 0.3s ease-in-out !important;
      line-height: 1 !important;
    }

    .zane-secondary:hover {
      background-color: rgba(255, 255, 255, 0.08) !important;
      border-color: rgba(255, 255, 255, 0.3) !important;
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3) !important;
    }

    .btn-content {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #f5f5f5;
   
    }

    /* Ikon animáció a hover állapothoz */
    .zane-secondary:hover mat-icon {
      transform: rotate(-45deg);
      color: white !important;
    }

    mat-icon {
      transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
      font-size: 18px !important;
      width: 18px !important;
      height: 18px !important;
      color: rgba(255, 255, 255, 0.7);
    }
  `]
})
export class SecondaryButtonComponent {
  @Input() text: string = 'Discover more';
  @Input() icon: string = 'arrow_forward';
}