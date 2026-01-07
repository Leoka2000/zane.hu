import { Component, inject, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core'; 
import { MatDialog, MatDialogModule } from '@angular/material/dialog'; // ✅ Fontos importok

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslateModule, MatDialogModule], // ✅ MatDialogModule hozzáadva
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

  // Ez a függvény nyitja meg a dialógust a HTML-ben definiált template alapján
 openRulerDialog(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef, {
      width: '100%',
      maxWidth: '900px', // Itt korlátozzuk a dialógus szélességét
      panelClass: 'ruler-dialog-panel',
      backdropClass: 'backdrop-blur-[10px]',
      autoFocus: false
    });
  }
}