import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Added
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { FormContactComponent } from './form-contact/form-contact.component';
 // Ensure path is correct

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, MatIconModule, FormContactComponent], // Added FormContactComponent
  templateUrl: './contact-section.component.html',
  styles: [
    `
      /* Essential for removing Material default paddings/shadows */
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
      
      /* Target the form wrapper inside this section to ensure no double backgrounds */
      :host ::ng-deep .form-wrapper {
        padding-top: 0 !important;
        padding-bottom: 0 !important;
      }
    `,
  ],
})
export class ContactSectionComponent {}