import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [MatExpansionModule, MatIconModule],
  templateUrl: './contact-section.component.html',
  // Essential for removing Material default paddings/shadows
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
    `,
  ],
})
export class ContactSectionComponent {}
