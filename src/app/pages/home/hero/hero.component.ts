import { Component, inject } from '@angular/core'; 
import { SecondaryButtonComponent } from '../../../components/secondary-button/secondary-button.component';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';
import { MatIconModule } from '@angular/material/icon';
import { BadgeComponent } from '../../../components/ui/badge/badge.component';
import { GreenShadesComponent } from "../../../components/utils/green-shades/green-shades.component";
import { MatDialog, MatDialogModule } from '@angular/material/dialog'; 
import { QuotationDialogComponent } from '../../../components/dialogs/quotation-dialog/quotation-dialog.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    SecondaryButtonComponent, 
    PrimaryButtonComponent, 
    MatIconModule, 
    BadgeComponent, 
    GreenShadesComponent,
    MatDialogModule,
    QuotationDialogComponent,
    TranslateModule 
  ],
  templateUrl: './hero.component.html',
  styles: ``
})
export class HeroComponent {
  private dialog = inject(MatDialog);

  scrollToFeatures() {
    const element = document.getElementById('protection-section');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest' 
      });
    }
  }

  openQuoteDialog() {
    this.dialog.open(QuotationDialogComponent, {
      width: '600px', 
      maxWidth: '95vw',
      panelClass: 'custom-dialog-container',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '150ms'
    });
  }
}