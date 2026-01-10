import { Component, inject, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { QuotationDialogComponent } from '../dialogs/quotation-dialog/quotation-dialog.component';
import { TanusitvanyDialogComponent } from '../dialogs/tanusitvany-dialog/tanusitvany-dialog.component';
import { AdatzekelesDialogComponent } from '../dialogs/adatzekeles-dialog/adatzekeles-dialog.component';
import { MinosegPolitikaDialogComponent } from '../dialogs/minoseg-politika-dialog/minoseg-politika-dialog.component';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslateModule, MatDialogModule],
  templateUrl: './footer.component.html',
  styles: [
    `
      :host {
        display: block;
        width: 100%;
      }
    `,
  ],
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
      autoFocus: false,
    });
  }
  openCertDialog() {
    this.dialog.open(TanusitvanyDialogComponent, {
      width: 'auto',
      maxWidth: '95vw',
      panelClass: 'custom-dialog-container',
      backdropClass: 'backdrop-blur-[20px]',
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

  openPrivacyDialog() {
  this.dialog.open(AdatzekelesDialogComponent, {
    width: 'auto',
    maxWidth: '95vw', 
    panelClass: 'custom-dialog-container',
    backdropClass: 'backdrop-blur-[20px]',
  });
}

  openMinosegDialog() {
  this.dialog.open(MinosegPolitikaDialogComponent, {
    width: '100%',
    maxWidth: '1000px',
    panelClass: 'ruler-dialog-panel',
    backdropClass: 'backdrop-blur-[10px]',
    autoFocus: false
  });
}
}
