import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';

@Component({
  selector: 'app-service-accordion',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    PrimaryButtonComponent,
    TranslateModule,
  ],
  templateUrl: './service-accordion.component.html',
  styles: [
    `
      ::ng-deep .custom-dark-accordion .mat-expansion-panel {
        background: transparent !important;
        padding: 0 !important;
        margin: 0 !important;
      }
      ::ng-deep .custom-dark-accordion .mat-expansion-panel-header-description,
      ::ng-deep .custom-dark-accordion .mat-content {
             background: transparent !important;
        flex-grow: 1;
        justify-content: space-between;
        align-items: center;
      }
      ::ng-deep .mat-expansion-indicator {
             background: transparent !important;
        display: none !important;
      }
    `,
  ],
})
export class ServiceAccordionComponent {
  private router = inject(Router);
  private translate = inject(TranslateService);

  services = [
    { id: 'rendszertervezes', imgUrl: 'images/about/about-img1.jpg' },
    { id: 'kapcsolasi-rajz', imgUrl: 'images/about/about-img2.jpg' },
    { id: 'nyomtatott-aramkor', imgUrl: 'images/about/about-img3.jpg' },
    { id: 'mechanikai-tervezes', imgUrl: 'images/about/about-img4.jpg' },
    { id: 'beagyazott-szoftverek', imgUrl: 'images/about/about-img5.jpg' },
  ];

  navigateToService(id: string) {
    this.router.navigate(['/services', id]);
  }
}
