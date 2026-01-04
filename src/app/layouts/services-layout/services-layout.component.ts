import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ServicesHomeComponent } from '../../pages/services-home/services-home.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-services-layout',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, ServicesHomeComponent, MatIconModule],
  templateUrl: './services-layout.component.html',
  styles: [`
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
  `]
})
export class ServicesLayoutComponent implements OnInit {
  private route = inject(ActivatedRoute);
  selectedServiceId: string | null = null;

  services = [
    { 
      id: 'rendszertervezes', 
      title: 'Rendszertervezés', 
      imgUrl: 'images/about/about-img1.jpg', 
      description: `Azt szokták mondani, hogy ha valaki házat épít, az alapra nagyon oda kell figyelnie, mert az fogja az egész épületet megtartani. Ez pontosan ugyanígy igaz az elektronikában is.`,
      descriptionOne: `A tervezés során már az első pillanatoktól fontos, hogy céltudatosan az adott feladatra építsük fel az elektronikát. A jól megtervezett áramkör pontosan annyi alkatrészt tartalmaz, mint amennyi ahhoz szükséges.`,
      descriptionTwo: `Rendkívül mély több évtizedes szaktudásunk mellett úgy hiszem ez a kulcsa annak, hogy a projektjeink és ügyfeleink sikeresek legyenek.`,
      imgUrlOne: 'images/about/about-img1.jpg',
      imgUrlTwo: 'images/about/about-img2.jpg',
      detailedContent: `Ebben a fázisban dől el a projekt gazdasági és technikai megvalósíthatósága.`
    },
    { 
      id: 'kapcsolasi-rajz', 
      title: 'Kapcsolási rajz', 
      imgUrl: 'images/about/about-img2.jpg', 
      description: 'Miután már van rendszertervünk, megtervezzük az áramkör kapcsolási rajzát.',
      descriptionOne: 'Több mint tízéves tapasztalatunk van nagy sebességű és RF áramkörök tervezésében.',
      descriptionTwo: 'Precíz dokumentációt biztosítunk minden tervhez.',
      imgUrlOne: 'images/about/about-img2.jpg',
      imgUrlTwo: 'images/about/about-img3.jpg',
      detailedContent: '' 
    },
    { 
      id: 'nyomtatott-aramkor', 
      title: 'Nyomtatott áramkör tervezés', 
      imgUrl: 'images/about/about-img3.jpg', 
      description: 'A kapcsolási rajz tervezést követi a nyomtatott áramkörök tervezése.',
      descriptionOne: 'Áramkörtervezési kurzusokat is tartunk partnereinknek.',
      descriptionTwo: 'A legmodernebb tervezőprogramokat használjuk.',
      imgUrlOne: 'images/about/about-img3.jpg',
      imgUrlTwo: 'images/about/about-img4.jpg',
      detailedContent: ''
    },
    { 
      id: 'mechanikai-tervezes', 
      title: 'Mechanikai tervezés', 
      imgUrl: 'images/about/about-img4.jpg', 
      description: 'Az elkészült nyomtatott áramkörhöz kollégáink burkolatot terveznek.',
      descriptionOne: 'Prototípus házakat tudunk készíteni 3D nyomtatással.',
      descriptionTwo: 'Figyelembe vesszük az ergonómiát és az ipari szabványokat.',
      imgUrlOne: 'images/about/about-img4.jpg',
      imgUrlTwo: 'images/about/about-img5.jpg',
      detailedContent: ''
    },
    { 
      id: 'beagyazott-szoftverek', 
      title: 'Beágyazott szoftverek fejlesztése', 
      imgUrl: 'images/about/about-img5.jpg', 
      description: 'Az elkészült áramkörökbe “életet lehelünk” okos algoritmusokkal.',
      descriptionOne: 'Kritikus fontosságú rendszerekhez is fejlesztünk kódokat.',
      descriptionTwo: 'Modern C/C++ és egyéb technológiákat alkalmazunk.',
      imgUrlOne: 'images/about/about-img5.jpg',
      imgUrlTwo: 'images/about/about-img1.jpg',
      detailedContent: ''
    }
  ];

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.selectedServiceId = params.get('id');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  getServiceData() {
    return this.services.find(s => s.id === this.selectedServiceId);
  }

  getFormattedText(fieldName: 'description' | 'detailedContent' | 'descriptionOne' | 'descriptionTwo'): string[] {
    const service = this.getServiceData();
    const text = service ? (service as any)[fieldName] : '';
    if (!text) return [];
    let cleanText = text.replace(/<br\s*\/?>/gi, ' ');
    return cleanText.split('. ').filter((s: string) => s.trim().length > 0);
  }
}