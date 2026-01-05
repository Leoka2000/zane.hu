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
    
    // Alapvetés
    description: `Azt szokták mondani, hogy ha valaki házat épít, az alapra nagyon oda kell figyelnie, mert az fogja az egész épületet megtartani. Ez pontosan ugyanígy igaz az elektronikában is.`,
    
    // DescriptionOne: A teljes első blokk szövege, amit küldtél
    descriptionOne: `Azt szokták mondani, hogy ha valaki házat épít, az alapra nagyon oda kell figyelnie, mert az fogja az egész épületet megtartani. Ez pontosan ugyanígy igaz az elektronikában is. A tervezés során már az első pillanatoktól fontos, hogy céltudatosan az adott feladatra építsük fel az elektronikát. A jól megtervezett áramkör pontosan annyi alkatrészt tartalmaz, mint amennyi ahhoz szükséges, hogy a feladatát megfelelően lássa el. A tervező a folyamat során egy percig sem veszíti el a fókuszt, hogy mi a célja annak a projektnek amin épp dolgozik. Egy gyermekek számára tervezett eszköz megbízhatósága is ugyanúgy fontos, mint egy ipari körülmények közé tervezett elektronikáé. Ugyanakkor a két esetben szinte biztos, hogy teljesen eltérő megoldásokat fogunk választani a munkánk során. A rendszertervezés magában foglalja a megfelelő szabványok alkalmazására való felkészülést, hiszen ha ezekkel csak a tervezés későbbi szakaszaiban kezdenénk el komolyabban foglalkozni akkor az már időben és költségben is veszteséget okozhatna.`,
    
    // DescriptionTwo: A szinergiákról szóló rész
    descriptionTwo: `A felhasználói interakciók, kommunikációs csatornák, felhasználói felületek, design, sorozat gyárthatóság, mind mind olyan területek, ahol vagy a saját munkatársaink, vagy állandó megbízott külső szakértő partnereink, vagy az ügyfelünk által biztosított erőforrások szinergiáit kell megteremtenünk és hasznosítanunk. Rendkívül mély több évtizedes szaktudásunk mellett úgy hiszem ez a másik nagyon fontos kulcsa annak, hogy a projektjeink, ügyfeleink és ezeken keresztül mi magunk is sikeresek legyünk.`,
    
    descriptionThree: ``,
    descriptionFour: ``,
    
    imgUrlOne: 'images/rendszertervezes/img1.png',
    imgUrlTwo: 'images/rendszertervezes/img2.jpg',
    imgUrlThree: '',
    imgUrlFour: '',
    
    // Generált részletes tartalom (detailedContent)
    detailedContent: `A professzionális rendszertervezés során nem csupán áramköröket alkotunk, hanem egy teljes technológiai ökoszisztémát alapozunk meg, amely garantálja a hosszú távú fenntarthatóságot és a piaci versenyelőnyt.`
  },
  { 
    id: 'kapcsolasi-rajz', 
    title: 'Kapcsolási rajz', 
    imgUrl: 'images/about/about-img2.jpg', 
    description: 'Miután már van rendszertervünk, megtervezzük az áramkör kapcsolási rajzát.',
    descriptionOne: 'Több mint tízéves tapasztalatunk van nagy sebességű és RF áramkörök tervezésében.',
    imgUrlOne: 'images/about/about-img2.jpg',
    descriptionTwo: 'Precíz dokumentációt biztosítunk minden tervhez, szem előtt tartva a gyárthatóságot.',
    imgUrlTwo: 'images/about/about-img3.jpg',
    descriptionThree: '',
    imgUrlThree: '',
    descriptionFour: '',
    imgUrlFour: '',
    detailedContent: '' 
  },
  { 
    id: 'nyomtatott-aramkor', 
    title: 'Nyomtatott áramkör tervezés', 
    imgUrl: 'images/about/about-img3.jpg', 
    description: 'A kapcsolási rajz tervezést követi munkánk egyik legfontosabb része a nyomtatott áramkörök tervezése.',
    descriptionOne: 'Áramkörtervezési kurzusokat tartunk partnereinknek és egyetemi hallgatóknak.',
    imgUrlOne: 'images/about/about-img3.jpg',
    descriptionTwo: 'A legmodernebb többrétegű technológiákat alkalmazzuk a minél kisebb méret érdekében.',
    imgUrlTwo: 'images/about/about-img4.jpg',
    descriptionThree: '',
    imgUrlThree: '',
    descriptionFour: '',
    imgUrlFour: '',
    detailedContent: ''
  },
  { 
    id: 'mechanikai-tervezes', 
    title: 'Mechanikai tervezés', 
    imgUrl: 'images/about/about-img4.jpg', 
    description: 'Az elkészült nyomtatott áramkörhöz kollégáink burkolatot terveznek a megrendelő igényei szerint.',
    descriptionOne: 'Prototípus házakat tudunk készíteni 3D nyomtatással és CNC megmunkálással.',
    imgUrlOne: 'images/about/about-img4.jpg',
    descriptionTwo: 'Figyelembe vesszük a hűtési igényeket és az ergonómiai szempontokat is.',
    imgUrlTwo: 'images/about/about-img5.jpg',
    descriptionThree: '',
    imgUrlThree: '',
    descriptionFour: '',
    imgUrlFour: '',
    detailedContent: ''
  },
  { 
    id: 'beagyazott-szoftverek', 
    title: 'Beágyazott szoftverek fejlesztése', 
    imgUrl: 'images/about/about-img5.jpg', 
    description: 'Egyik legszebb része a munkánknak, amikor az elkészült áramkörökbe “életet lehelünk”.',
    descriptionOne: 'Okos algoritmusokkal tesszük hatékonnyá és megbízhatóvá az eszközöket.',
    imgUrlOne: 'images/about/about-img5.jpg',
    descriptionTwo: 'Valós idejű operációs rendszerekkel és bare-metal fejlesztéssel is foglalkozunk.',
    imgUrlTwo: 'images/about/about-img1.jpg',
    descriptionThree: '',
    imgUrlThree: '',
    descriptionFour: '',
    imgUrlFour: '',
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

  getFormattedText(fieldName: 'description' | 'detailedContent' | 'descriptionOne' | 'descriptionTwo' | 'descriptionThree' | 'descriptionFour'): string[] {
    const service = this.getServiceData();
    const text = service ? (service as any)[fieldName] : '';
    if (!text) return [];

    // Változás: A pontot, kérdőjelet, felkiáltójelet megtartjuk a mondat végén a regex segítségével
    const sentences = text.match(/[^.!?]+[.!?]+(?=\s|$)/g);
    return sentences ? sentences : [text];
  }
}