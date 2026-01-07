import { Component, inject, TemplateRef, ViewChild } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-nav-mobile-sheet',
  standalone: true,
  imports: [MatListModule, RouterModule, MatIconModule, CommonModule, MatDialogModule],
  templateUrl: './nav-mobile-sheet.component.html',
  styles: [`
    :host {
      display: block;
      background-color: #000d01;
      padding: 16px;
    }
    
    .mobile-link {
      color: #e5e5e5 !important;
      font-size: 1.1rem;
      text-transform: uppercase;
      margin-bottom: 8px;
    }

    /* Javított aktív stílus: kényszerítjük a színt a Material belső elemeire is */
    .active-link {
      background: rgba(118, 229, 148, 0.05) !important; /* Finom háttér az aktív elemnek */
    }

    .active-link [matListItemTitle],
    .active-link mat-icon {
      color: #76e594 !important;
      font-weight: bold !important;
    }

    /* Eltávolítjuk a Material alapértelmezett hover effektjét, hogy ne zavarjon be */
    mat-nav-list a:hover {
      background: rgba(255, 255, 255, 0.03);
    }
  `]
})
export class NavMobileSheetComponent {
  private _bottomSheetRef = inject(MatBottomSheetRef);
  private dialog = inject(MatDialog);

  @ViewChild('rulerDialog') rulerDialogTemplate!: TemplateRef<any>;

  close(event: MouseEvent): void {
    // Engedjük, hogy a router navigáljon, mielőtt bezárjuk a sheet-et
    setTimeout(() => {
      this._bottomSheetRef.dismiss();
    }, 100);
  }

  openRuler(): void {
    // Előbb bezárjuk a mobil menüt, hogy ne legyen útban a dialógus alatt
    this._bottomSheetRef.dismiss();
    
    this.dialog.open(this.rulerDialogTemplate, {
      width: '100%',
      maxWidth: '800px',
      panelClass: 'ruler-dialog-panel',
      backdropClass: 'backdrop-blur-[10px]',
      autoFocus: false
    });
  }
}