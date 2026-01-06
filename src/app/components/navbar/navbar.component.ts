import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'; // Új import
import { QuotationDialogComponent } from '../dialogs/quotation-dialog/quotation-dialog.component';
import { NavMobileSheetComponent } from './nav-mobile-sheet/nav-mobile-sheet.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    PrimaryButtonComponent, 
    CommonModule, 
    RouterModule, 
    MatDialogModule, 
    MatBottomSheetModule, 
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './navbar.component.html',
  styles: [`
    /* Desktop Material Gomb Aktív Stílusa - Aláhúzás nélkül */
    .active-link {
      color: #76e594 !important;
      background: rgba(118, 229, 148, 0.1) !important; /* Finom zöldes háttér marad */
      font-weight: 600 !important; /* Kiemeljük a szöveget egy kicsit */
    }

    /* Eltávolítottuk az .active-link::after blokkot, így nincs aláhúzás */

    .nav-mat-btn {
      color: #f5f5f5 !important;
      font-family: inherit;
      letter-spacing: 1px;
      transition: all 0.3s ease !important;
      border-radius: 8px !important; /* Kerekítünk a gombok sarkain a modern hatásért */
    }

    .nav-mat-btn:hover {
      color: #76e594 !important;
      background: rgba(255, 255, 255, 0.05) !important;
    }
  `]
})
export class NavbarComponent {
  isScrolled = false;
  private dialog = inject(MatDialog);
  private _bottomSheet = inject(MatBottomSheet);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  openQuoteDialog() {
    this.dialog.open(QuotationDialogComponent, {
      width: '600px',
      panelClass: 'custom-dialog-container'
    });
  }

  openMobileMenu() {
    this._bottomSheet.open(NavMobileSheetComponent, {
      panelClass: 'dark-bottom-sheet',
      backdropClass: 'custom-blur-backdrop',
      disableClose: false,
    });
  }
}