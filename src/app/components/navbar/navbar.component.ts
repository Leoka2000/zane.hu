import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; // Required for [ngClass]
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";
import { QuotationDialogComponent } from '../quotation-dialog/quotation-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [PrimaryButtonComponent, CommonModule],
  templateUrl: './navbar.component.html',
  styles: ``
})
export class NavbarComponent {
  isScrolled = false;
  private dialog = inject(MatDialog);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // If scroll is more than 20px, turn on the blur effect
    this.isScrolled = window.scrollY > 20;
  }
  openQuoteDialog() {
    this.dialog.open(QuotationDialogComponent, {
      width: '600px',
      panelClass: 'custom-dialog-container'
    });
  }
}