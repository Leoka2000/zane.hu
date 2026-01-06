import {
  Component,
  OnInit,
  OnDestroy,
  inject,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ServicesHomeComponent } from '../../pages/services-home/services-home.component';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

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
export class ServicesLayoutComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private translate = inject(TranslateService);
  private sanitizer = inject(DomSanitizer);
  private cdr = inject(ChangeDetectorRef);

  private langSub?: Subscription;
  selectedServiceId: string | null = null;

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

    // Nyelvi változás figyelése: A fordítás betöltésekor frissítünk
    this.langSub = this.translate.onLangChange.subscribe(() => {
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy() {
    if (this.langSub) this.langSub.unsubscribe();
  }

  getServiceData() {
    return this.services.find((s) => s.id === this.selectedServiceId);
  }

  getTranslation(field: string): string {
    if (!this.selectedServiceId) return '';
    const key = `serv_layout.services.${this.selectedServiceId}.${field}`;
    const translation = this.translate.instant(key);
    return translation === key ? '' : translation;
  }

  // Hibajavítás: Ez a funkció most már biztosan visszaadja a szöveget, még ha nincs is írásjel
  getFormattedText(field: string): SafeHtml[] {
    const text = this.getTranslation(field);
    if (!text) return [];

    // 1. Ha HTML (ikonok listája), azonnal küldjük vissza
    if (text.includes('<') && text.includes('>')) {
      return [this.sanitizer.bypassSecurityTrustHtml(text)];
    }

    // 2. A 'desc' mezőhöz egyszerűsített logika: ne keressen kiemelést, csak adja vissza a szöveget
    if (field === 'desc') {
      return [this.sanitizer.bypassSecurityTrustHtml(text)];
    }

    // 3. Egyéb mezőkhöz (d1, d2) marad a mondatos logika
    let cleanText = text;
    const highlight = this.getHighlightedSentence(field);
    if (highlight && cleanText.includes(highlight)) {
      cleanText = text.replace(highlight, '').trim();
    }

    // Ha a tisztítás után üres maradt (mert a highlight == teljes szöveg)
    if (!cleanText) return [this.sanitizer.bypassSecurityTrustHtml(text)];

    const sentences = cleanText.match(/[^.!?]+[.!?]+(?=\s|$)/g);
    const allSentences =
      sentences && sentences.length > 0 ? sentences : [cleanText];

    return allSentences.map((s) =>
      this.sanitizer.bypassSecurityTrustHtml(s.trim())
    );
  }

  getHighlightedSentence(field: string): string | null {
    // A 'desc' esetében nem akarunk kiemelt mondatot a design miatt
    if (field === 'desc') return null;

    const text = this.getTranslation(field);
    if (!text || text.includes('<')) return null;
    const match = text.match(/([^.!?]+[.!?]+(?:\s|$)){1,2}/);
    return match ? match[0].trim() : null;
  }
}
