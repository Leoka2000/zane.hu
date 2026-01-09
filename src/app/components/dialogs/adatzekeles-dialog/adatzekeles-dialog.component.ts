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
      background: #000d01;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
    }
    img {
      width: 100%!important;       
      height: auto;      
      
      object-fit: contain;
      
      border-radius: 4px;
    }
  `]
})
export class AdatzekelesDialogComponent {}