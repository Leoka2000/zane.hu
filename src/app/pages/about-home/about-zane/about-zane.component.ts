import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';

@Component({
  selector: 'app-about-zane',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, MatIconModule, PrimaryButtonComponent],
  templateUrl: './about-zane.component.html',
  styles: [`
    .grotesk {
      font-family: 'Space Grotesk', sans-serif;
    }

    /* Ajustes para o tema dark do Angular Material */
    ::ng-deep .custom-dark-accordion .mat-expansion-panel {
      background: transparent !important;
    }

    ::ng-deep .custom-dark-accordion .mat-expansion-panel-header-description,
    ::ng-deep .custom-dark-accordion .mat-content {
      flex-grow: 1;
      justify-content: space-between;
      align-items: center;
    }

    /* Esconde a seta padrão para usar o ícone customizado */
    ::ng-deep .mat-expansion-indicator {
      display: none !important;
    }
  `]
})
export class AboutZaneComponent {
  constructor(private router: Router) {}

  services = [
    {
      id: 'rendszertervezes',
      title: 'Rendszertervezés',
      imgUrl: 'images/about/about-img1.jpg',
      description: 'A tervezési folyamat az üzleti kereslet pontos felmérésével kezdődik, az úgynevezett BRS meghatározásával. Ez a rendszertervezés alapja. Ahogy fontos, hogy egy épület stabil alapokra épüljön, úgy az elektronikai tervezésben is ezeket az alapokat fektetjük le.'
    },
    {
      id: 'kapcsolasi-rajz',
      title: 'Kapcsolási rajz',
      imgUrl: 'images/about/about-img2.jpg',
      description: 'Miután már van rendszertervünk, megtervezzük az áramkör kapcsolási rajzát. Több mint tízéves tapasztalatunk van nagy sebességű, RF, analóg áramkörök e komplex elektronikák tervezésében.'
    },
    {
      id: 'nyomtatott-aramkor',
      title: 'Nyomtatott áramkör tervezés',
      imgUrl: 'images/about/about-img3.jpg',
      description: 'A kapcsolási rajz tervezést követi munkánk egyik legfontosabb része a nyomtatott áramkörök tervezése. Áramkörtervezési kurzusokat tartunk partnereinknek és egyetemi hallgatóknak.'
    },
    {
      id: 'mechanikai-tervezes',
      title: 'Mechanikai tervezés',
      imgUrl: 'images/about/about-img4.jpg',
      description: 'Az elkészült nyomtatott áramkörhöz kollégáink burkolatot terveznek a megrendelő igényei szerint. Prototípus házakat tudunk készíteni 3D nyomtatással e CNC megmunkálással.'
    },
    {
      id: 'beagyazott-szoftverek',
      title: 'Beágyazott szoftverek fejlesztése',
      imgUrl: 'images/about/about-img5.jpg',
      description: 'Egyik legszebb része a munkánknak, amikor az elkészült áramkörökbe “életet lehelünk” okos algoritmusokkal, melyeknek köszönhetően eszközeink segítenek az élet számos területén.'
    }
  ];

  navigateToService(id: string) {
    // Navega para a rota dinâmica configurada: /services/id-do-servico
    this.router.navigate(['/services', id]);
  }
}