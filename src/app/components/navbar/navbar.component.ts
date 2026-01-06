import { Component, HostListener, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu'; // ✅ Új import a dropdownhoz
import { TranslateModule, TranslateService } from '@ngx-translate/core'; // ✅ Új import
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
    MatButtonModule,
    MatMenuModule, // ✅
    TranslateModule, // ✅
  ],
  templateUrl: './navbar.component.html',
  styles: [
    `
      .active-link {
        color: #76e594 !important;
        background: rgba(118, 229, 148, 0.1) !important;
        font-weight: 600 !important;
      }

      .nav-mat-btn {
        color: #f5f5f5 !important;
        font-family: inherit;
        letter-spacing: 1px;
        transition: all 0.3s ease !important;
        border-radius: 8px !important;
      }

      .nav-mat-btn:hover {
        color: #76e594 !important;
        background: rgba(255, 255, 255, 0.05) !important;
      }

      /* Dropdown stílus a sötét témához */
      ::ng-deep .dark-menu {
        background-color: #000d01 !important;
        border: 1px solid rgba(118, 229, 148, 0.2);
      }
      ::ng-deep .dark-menu .mat-mdc-menu-item {
        color: #f5f5f5 !important;
      }
      ::ng-deep .dark-menu .mat-mdc-menu-item:hover {
        background-color: rgba(118, 229, 148, 0.1) !important;
      }
    `,
  ],
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  currentLang: string = 'hu';

  private dialog = inject(MatDialog);
  private _bottomSheet = inject(MatBottomSheet);
  private translate = inject(TranslateService); // ✅ Injektálás

  constructor() {
    // Alapértelmezett nyelv beállítása
    this.translate.addLangs(['hu', 'en']);
    this.translate.setDefaultLang('hu');

    // Korábban elmentett nyelv betöltése
    const savedLang = localStorage.getItem('lang');
    this.currentLang = savedLang || 'hu';
    this.translate.use(this.currentLang);
  }

  ngOnInit() {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  changeLang(lang: string) {
    this.currentLang = lang;
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  openQuoteDialog() {
    this.dialog.open(QuotationDialogComponent, {
      width: '600px',
      panelClass: 'custom-dialog-container',
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