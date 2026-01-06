import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { FormContactComponent } from './form-contact/form-contact.component';
import { BelowBgShadesComponent } from "../../../shades/below-bg-shades/below-bg-shades.component";
import { TranslateModule } from '@ngx-translate/core'; 

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [
    CommonModule, 
    MatExpansionModule, 
    MatIconModule, 
    FormContactComponent, 
    BelowBgShadesComponent,
    TranslateModule 
  ],
  templateUrl: './contact-section.component.html',
  styles: [
    `
      ::ng-deep .custom-dark-accordion .mat-expansion-panel-header-description,
      ::ng-deep .custom-dark-accordion .mat-content {
        flex-grow: 1;
        justify-content: space-between;
        align-items: center;
        background-color: transparent;
      }
      ::ng-deep .mat-expansion-indicator {
        display: none !important;
      }
      :host ::ng-deep .form-wrapper {
        padding-top: 0 !important;
        padding-bottom: 0 !important;
      }
    `,
  ],
})
export class ContactSectionComponent {}