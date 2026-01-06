import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ServicesHomeComponent } from '../../pages/services-home/services-home.component';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

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
      /* Kép konténer javítás világos hátterű logókhoz/tervekhez */
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
  private sanitizer = inject(DomSanitizer);
  
  selectedServiceId: string | null = null;

  // Szolgáltatások adatai: ID és kapcsolódó képek
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
    // Figyeljük az URL paraméter változását (szolgáltatás váltás)
    this.route.paramMap.subscribe((params) => {
      this.selectedServiceId = params.get('id');
      // Visszagörgetés az oldal tetejére váltáskor
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Aktuális szolgáltatás adatainak lekérése
  getServiceData() {
    return this.services.find((s) => s.id === this.selectedServiceId);
  }

  // Fordítás lekérése dinamikus kulcs alapján
  getTranslation(field: string): string {
    if (!this.selectedServiceId) return '';
    const key = `serv_layout.services.${this.selectedServiceId}.${field}`;
    const translation = this.translate.instant(key);
    return translation === key ? '' : translation;
  }

  // Kiemelt mondat kinyerése (ha nem HTML tartalomról van szó)
  getHighlightedSentence(field: string): string | null {
    const text = this.getTranslation(field);
    if (!text || text.includes('<')) return null;
    const match = text.match(/([^.!?]+[.!?]+(?:\s|$)){1,3}/);
    return match ? match[0].trim() : null;
  }

  // Szöveg formázása parágrafusokra és HTML biztonságossá tétele
  getFormattedText(field: string): SafeHtml[] {
    const text = this.getTranslation(field);
    if (!text) return [];

    // Ha a szöveg HTML (mint a d3 szekció), biztonságos HTML-ként adjuk vissza
    if (text.includes('<') && text.includes('>')) {
      return [this.sanitizer.bypassSecurityTrustHtml(text)];
    }

    let cleanText = text;
    const highlight = this.getHighlightedSentence(field);
    if (highlight) {
      cleanText = text.replace(highlight, '').trim();
    }

    // Mondatokra bontás pontok alapján
    const allSentences = cleanText.match(/[^.!?]+[.!?]+(?=\s|$)/g) || [cleanText];
    
    const chunks: SafeHtml[] = [];
    // 4 mondatonként csoportosítjuk a parágrafusokat
    for (let i = 0; i < allSentences.length; i += 4) {
      const chunk = allSentences.slice(i, i + 4).join(' ');
      if (chunk.trim()) {
        chunks.push(this.sanitizer.bypassSecurityTrustHtml(chunk));
      }
    }
    return chunks;
  }
}