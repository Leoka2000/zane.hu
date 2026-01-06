import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button'; // ✅ New Import

@Component({
  selector: 'app-primary-button',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatProgressSpinnerModule, MatButtonModule],
  templateUrl: './primary-button.component.html',
  styles: [`
    .zane-button {
      /* Applying your specific gradient and border */
      border: 1px solid #53db78 !important;
      background: linear-gradient(135deg, rgba(83, 219, 120, 0.25) 0%, rgba(19, 47, 28, 0.45) 60%, rgba(0, 13, 1, 0.85) 100%) !important;
      border-radius: 6px !important;
      text-transform: uppercase;
      letter-spacing: 1px;
      overflow: hidden;
      position: relative;
    }

    /* The dark overlay from your original button */
    .zane-button::before {
      content: '';
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.35);
      pointer-events: none;
      z-index: 0;
    }

    .btn-content {
      position: relative;
      z-index: 1;
      display: flex;
      align-items: center;
      gap: 8px;
      color: #e5e5e5;
    }
  `]
})
export class PrimaryButtonComponent {
  @Input() type: 'button' | 'submit' = 'button';
  @Input() text: string = 'Ajánlatkérés';
  @Input() icon: string = 'request_quote';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
}