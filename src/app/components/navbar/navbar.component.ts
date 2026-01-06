import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";
import { MatDialog } from '@angular/material/dialog';
import { QuotationDialogComponent } from '../dialogs/quotation-dialog/quotation-dialog.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [PrimaryButtonComponent, CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styles: [`
    .active-link {
      color: #76e594 !important;
      text-decoration: underline !important;
      text-underline-offset: 8px;
      text-decoration-thickness: 2px;
    }
  `]
})
export class NavbarComponent {
  isScrolled = false;
  private dialog = inject(MatDialog);

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
}