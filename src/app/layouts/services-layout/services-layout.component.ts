import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router'; // RouterModule hozzáadva
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ServicesHomeComponent } from '../../pages/services-home/services-home.component';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-services-layout',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    ServicesHomeComponent,
    MatIconModule,
    TranslateModule,
    RouterModule,
  ],
  templateUrl: './services-layout.component.html',
  styles: [
    `
      .light-bg-fix {
        background-color: #e5e7eb !important;
        padding: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .light-bg-fix img {
        filter: contrast(1.2) brightness(1.05);
        mix-blend-mode: multiply;
        object-fit: contain !important;
      }
    `,
  ],
})
export class ServicesLayoutComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private translate = inject(TranslateService);
  selectedServiceId: string | null = null;

  // Csak a technikai adatokat tartjuk itt (ID-k és Képek)
  services = [
    {
      id: 'rendszertervezes',
      imgUrl: 'images/about/about-img1.jpg',
      imgUrlOne: 'images/rendszertervezes/img1.png',
      imgUrlTwo: 'images/rendszertervezes/img2.jpg',
      imgUrlThree: '',
      imgUrlFour: '',
    },
    {
      id: 'nyomtatott-aramkor',
      imgUrl: 'images/about/about-img3.jpg',
      imgUrlOne: 'images/nyomtatott/img1.png',
      imgUrlTwo: 'images/nyomtatott/img3.png',
      imgUrlThree: 'images/nyomtatott/img3.png',
      imgUrlFour: '',
    },
    {
      id: 'kapcsolasi-rajz',
      imgUrl: 'images/about/about-img2.jpg',
      imgUrlOne: 'images/kapcsolasirajz/img1.png',
      imgUrlTwo: 'images/kapcsolasirajz/img2.png',
      imgUrlThree: 'images/kapcsolasirajz/img3.png',
      imgUrlFour: '',
    },
    {
      id: 'mechanikai-tervezes',
      imgUrl: 'images/about/about-img4.jpg',
      imgUrlOne: 'images/mechanikai/img1.jpg',
      imgUrlTwo: 'images/mechanikai/img2.png',
      imgUrlThree: '',
      imgUrlFour: '',
    },
    {
      id: 'beagyazott-szoftverek',
      imgUrl: 'images/szofvarek/img1.jpg',
      imgUrlOne: 'images/szofvarek/img2.png',
      imgUrlTwo: 'images/szofvarek/img3.png',
      imgUrlThree: 'images/szofvarek/img4.png',
      imgUrlFour: '',
    },
  ];

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.selectedServiceId = params.get('id');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  getServiceData() {
    return this.services.find((s) => s.id === this.selectedServiceId);
  }

  // Dinamikusan olvassa a fordítást az ID alapján
  getTranslation(field: string): string {
    if (!this.selectedServiceId) return '';
    const key = `serv_layout.services.${this.selectedServiceId}.${field}`;
    const translation = this.translate.instant(key);
    return translation === key ? '' : translation; // Ha nincs fordítás, üreset ad vissza
  }

  getHighlightedSentence(field: string): string | null {
    const text = this.getTranslation(field);
    if (!text || (text.includes('<') && text.includes('>'))) return null;
    const match = text.match(/([^.!?]+[.!?]+(?:\s|$)){1,3}/);
    return match ? match[0].trim() : null;
  }

  getFormattedText(field: string): string[] {
    let text = this.getTranslation(field);
    if (!text) return [];
    if (text.includes('<') && text.includes('>')) return [text];

    const highlight = this.getHighlightedSentence(field);
    if (highlight) text = text.replace(highlight, '').trim();

    const allSentences = text.match(/[^.!?]+[.!?]+(?=\s|$)/g) || [text];
    const chunks: string[] = [];
    for (let i = 0; i < allSentences.length; i += 4) {
      const chunk = allSentences.slice(i, i + 4).join(' ');
      if (chunk.trim()) chunks.push(chunk);
    }
    return chunks;
  }
}
