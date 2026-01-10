import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-adatzekeles-dialog',
  standalone: true,
  imports: [MatDialogModule, MatIconModule],
  templateUrl: './adatzekeles-dialog.component.html',
  styles: [`
  .dialog-container {
    position: relative; /* Added for absolute button positioning */
    background: #000d01;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    width: 100% !important;
    height: auto;
    object-fit: contain;
    border-radius: 4px;
  }
`]
})
export class AdatzekelesDialogComponent {}