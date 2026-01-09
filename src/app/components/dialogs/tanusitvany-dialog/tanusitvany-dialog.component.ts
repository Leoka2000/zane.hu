import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-tanusitvany-dialog',
  standalone: true,
  imports: [MatDialogModule, MatIconModule],
  templateUrl: './tanusitvany-dialog.component.html',
  styles: [`
    .dialog-container {
      position: relative;
      background: #000d01;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    img {
      max-width: 100%;
      max-height: 80vh;
      border-radius: 4px;
      object-contain: contain;
    }
  `]
})
export class TanusitvanyDialogComponent {}