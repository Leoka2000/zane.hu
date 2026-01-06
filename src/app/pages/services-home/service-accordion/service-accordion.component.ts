import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';

@Component({
  selector: 'app-service-accordion',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, MatIconModule, PrimaryButtonComponent],
  templateUrl: './service-accordion.component.html',
  styles: [`
    /* Angular Material Dark téma igazítások */
    ::ng-deep .custom-dark-accordion .mat-expansion-panel {
      background: transparent !important;
      padding:0!important;
      margin:0!important;
    }

    ::ng-deep .custom-dark-accordion .mat-expansion-panel-header-description,
    ::ng-deep .custom-dark-accordion .mat-content {
      flex-grow: 1;
      justify-content: space-between;
      align-items: center;
    }

    /* Egyedi ikon használata a gyári nyíl helyett */
    ::ng-deep .mat-expansion-indicator {
      display: none !important;
    }
  `]
})
export class ServiceAccordionComponent {
  constructor(private router: Router) {}

  services = [
    {
      id: 'rendszertervezes',
      title: 'Rendszertervezés',
      imgUrl: 'images/about/about-img1.jpg',
      description: 'A tervezési folyamat az üzleti kereslet pontos felmérésével kezdődik, az úgynevezett BRS meghatározásával. Ez a rendszertervezés alapja.'
    },
    {
      id: 'kapcsolasi-rajz',
      title: 'Kapcsolási rajz',
      imgUrl: 'images/about/about-img2.jpg',
      description: 'Miután már van rendszertervünk, megtervezzük az áramkör kapcsolási rajzát. Több mint tízéves tapasztalatunk van RF és analóg áramkörök tervezésében.'
    },
    {
      id: 'nyomtatott-aramkor',
      title: 'Nyomtatott áramkör tervezés',
      imgUrl: 'images/about/about-img3.jpg',
      description: 'A kapcsolási rajz tervezést követi munkánk egyik legfontosabb része a nyomtatott áramkörök tervezése.'
    },
    {
      id: 'mechanikai-tervezes',
      title: 'Mechanikai tervezés',
      imgUrl: 'images/about/about-img4.jpg',
      description: 'Az elkészült nyomtatott áramkörhöz kollégáink burkolatot terveznek a megrendelő igényei szerint, akár 3D nyomtatással is.'
    },
    {
      id: 'beagyazott-szoftverek',
      title: 'Beágyazott szoftverek fejlesztése',
      imgUrl: 'images/about/about-img5.jpg',
      description: 'Az elkészült áramkörökbe “életet lehelünk” okos algoritmusokkal, melyek segítenek az élet számos területén.'
    }
  ];

  navigateToService(id: string) {
    // Navigáció a dinamikus ID-val
    this.router.navigate(['/services', id]);
  }
}