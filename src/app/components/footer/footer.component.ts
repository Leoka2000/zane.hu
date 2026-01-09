import { Component, inject, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core'; 
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { QuotationDialogComponent } from '../dialogs/quotation-dialog/quotation-dialog.component';// Importálva

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslateModule, MatDialogModule],
  templateUrl: './footer.component.html',
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
  `]
})
export class FooterComponent {
  private dialog = inject(MatDialog);

  // PCB Vonalzó megnyitása (Template alapú)
  openRulerDialog(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef, {
      width: '100%',
      maxWidth: '900px',
      panelClass: 'ruler-dialog-panel',
      backdropClass: 'backdrop-blur-[20px]',
      autoFocus: false
    });
  }

  //  Ajánlatkérés megnyitása (Komponens alapú)
  openQuoteDialog() {
    this.dialog.open(QuotationDialogComponent, {
      width: '800px',
      panelClass: 'custom-dialog-container',
      backdropClass: 'backdrop-blur-[20px]',
    });
  }
}