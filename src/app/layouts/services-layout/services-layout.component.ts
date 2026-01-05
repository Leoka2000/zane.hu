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
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    ServicesHomeComponent,
    MatIconModule,
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
  selectedServiceId: string | null = null;

  services = [
    {
      id: 'rendszertervezes',
      title: 'Rendszertervezés',
      imgUrl: 'images/about/about-img1.jpg',
      description: `A tervezési folyamat az üzleti kereslet pontos felmérésével kezdődik, az úgynevezett BRS meghatározásával. Ez a rendszertervezés alapja. Ahogy fontos, hogy egy épület stabil alapokra épüljön, úgy az elektronikai tervezésben is ezeket az alapokat fektetjük le a rendszertervezésben.`,
      descriptionOne: `Azt szokták mondani, hogy ha valaki házat épít, az alapra nagyon oda kell figyelnie, mert az fogja az egész épületet megtartani. Ez pontosan ugyanígy igaz az elektronikában is. A tervezés során már az első pillanatoktól fontos, hogy céltudatosan az adott feladatra építsük fel az elektronikát. A jól megtervezett áramkör pontosan annyi alkatrészt tartalmaz, mint amennyi ahhoz szükséges, hogy a feladatát megfelelően lássa el. A tervező a folyamat során egy percig sem veszíti el a fókuszt, hogy mi a célja annak a projektnek amin épp dolgozik. Egy gyermekek számára tervezett eszköz megbízhatósága is ugyanúgy fontos, mint egy ipari körülmények közé tervezett elektronikáé. Ugyanakkor a két esetben szinte biztos, hogy teljesen eltérő megoldásokat fogunk választani a munkánk során. A rendszertervezés magában foglalja a megfelelő szabványok alkalmazására való felkészülést, hiszen ha ezekkel csak a tervezés későbbi szakaszaiban kezdenénk el komolyabban foglalkozni akkor az már időben és költségben is veszteséget okozhatna.`,
      descriptionTwo: `A felhasználói interakciók, kommunikációs csatornák, felhasználói felületek, design, sorozat gyárthatóság, mind mind olyan területek, ahol vagy a saját munkatársaink, vagy állandó megbízott külső szakértő partnereink, vagy az ügyfelünk által biztosított erőforrások szinergiáit kell megteremtenünk és hasznosítanunk. Rendkívül mély több évtizedes szaktudásunk mellett úgy hiszem ez a másik nagyon fontos kulcsa annak, hogy a projektjeink, ügyfeleink és ezeken keresztül mi magunk is sikeresek legyünk.`,
      descriptionThree: ``,
      descriptionFour: ``,
      imgUrlOne: 'images/rendszertervezes/img1.png',
      imgUrlTwo: 'images/rendszertervezes/img2.jpg',
      imgUrlThree: '',
      imgUrlFour: '',
      detailedContent: `A professzionális rendszertervezés során nem csupán áramköröket alkotunk, hanem egy teljes technológiai ökoszisztémát alapozunk meg, amely garantálja a hosszú távú fenntarthatóságot és a piaci versenyelőnyt.`,
    },
    {
      id: 'nyomtatott-aramkor',
      title: 'Nyomtatott áramkör tervezés',
      imgUrl: 'images/about/about-img3.jpg',
      description:
        'A kapcsolási rajz tervezést követi munkánk egyik legfontosabb része a nyomtatott áramkörök tervezése. Áramkörtervezési kurzusokat tartunk évről évre partnereinknek, valamint egyetemi hallgatóknak. Az alábbi területeken rendelkezünk kiemelkedő tervezési tapasztalattal',
      descriptionOne:
        'Amikor 2012-ben megalapítottam a céget, akkor már több mint húszéves áramkörtervezési gyakorlattal rendelkeztem. Igazából ez a szerelem a nyomtatott áramkörökkel még a középiskola első éveiben kezdődött. Akkoriban még nem terjedtek el a számítógépek, kézzel rajzoltuk meg a nyomtatott áramkörök készítéséhez a mester filmeket. Az első program amit használtam áramkörtervezésre a DOS alatt használható Smartwork nevű nyáktervező program volt. Azóta nagyon sokat fejlődött a technológia, ma már szinte minden áramkör amit tervezünk nagyfokú integráltsággal rendelkezik, felületszerelt alkatrészeket tartalmaz. A munkánk során az alapokat az IPC-2221A szabvány írja le, amelyet a teljes tervezési folyamat során következetesen használunk is. A szabvány mellett a gyárthatósági paraméterek azok amik meghatározzák a kereteket a tervezési munka során, no és persze a legfontosabb szabályozó: a megrendelő kérése. A szabványok és a szabályok addig segítik a munkánkat, amíg nincs az adott kérdésre megrendelői instrukció. Alapszabály ugyanis, hogy a megrendelő utasítása, még a szabványokat is felülírhatja adott esetben. Természetesen amikor ilyen adódik, akkor ezt a megrendelőval is tisztázzuk még a munka megkezdése előtt.',
      imgUrlOne: 'images/nyomtatott/img1.png',
      descriptionTwo:
        'A NYÁK tervezési munkánk során jellemzően több alkalommal kell a megrendelővel kommunikálnunk. Az első lépésben egy vázlat tervet készítünk. Ilyenkor már lehet látni a főbb méreteket, a csatlakozók, szenzorok és a fontosabb alkatrészek elhelyezkedését. A megrendelő ezt jóváhagyhatja, vagy kérhet módosításokat. Amikor az alkatrészek elrendezése eldőlt, akkor elrendezzük az összes alkatrészt a közel végleges pozíciójukba. Ebben a lépésben állítjuk be a tervezőrendszerben a szabályrendszereket a várható gyártási technológiához igazodóan.Ha szükséges az alkatrészek elrendezése után újból egyeztetünk a megrendelő szakembereivel, például a mechanikai tervezővel, aki megvizsgálhatja van-e esetleges ütközés a várható burkolati elemekkel.',
      imgUrlTwo: 'images/nyomtatott/img3.png',
      descriptionThree: `
    <p class="mb-6">A következő lépésben huzalozás történik. Egyszerűbb paneleknél ez tipikusan 2-4 réteg, de volt már szerencsénk számos esetben 6 réteg fölötti panelekkel is dolgozni. A modern PCB gyártási technológiáknak köszönhetően a kreativitásnak szinte csak a megrendelés költségvetése szabhat korlátot. Csak, hogy néhány szakmai érdekességet említsek:</p>
    <ul class="space-y-5">
      <li class="flex items-start gap-4 group">
        <div class="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#76e594]/10 border border-[#76e594]/20 transition-colors group-hover:bg-[#76e594]/20">
          <span class="material-icons !text-[#76e594] !text-[20px]">layers</span>
        </div>
        <div class="pt-1">
          <span class="text-neutral-300"><strong class="text-neutral-100">Eltemetett és vak viák:</strong> amikor a via csak bizonyos rétegek között van átfúrva, nem az egész panelen.</span>
        </div>
      </li>
      <li class="flex items-start gap-4 group">
        <div class="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#76e594]/10 border border-[#76e594]/20 transition-colors group-hover:bg-[#76e594]/20">
          <span class="material-icons !text-[#76e594] !text-[20px]">memory</span>
        </div>
        <div class="pt-1">
          <span class="text-neutral-300"><strong class="text-neutral-100">HDI:</strong> nagy sűrűségű rajzolat esetén lézerrel „fúrt” mikro viák.</span>
        </div>
      </li>
      <li class="flex items-start gap-4 group">
        <div class="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#76e594]/10 border border-[#76e594]/20 transition-colors group-hover:bg-[#76e594]/20">
          <span class="material-icons !text-[#76e594] !text-[20px]">settings_brightness</span>
        </div>
        <div class="pt-1">
          <span class="text-neutral-300"><strong class="text-neutral-100">Alumínium hordozó:</strong> főképp LED világítótestekhez jó hővezetésű aluminium lap a hordozó lemez.</span>
        </div>
      </li>
      <li class="flex items-start gap-4 group">
        <div class="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#76e594]/10 border border-[#76e594]/20 transition-colors group-hover:bg-[#76e594]/20">
          <span class="material-icons !text-[#76e594] !text-[20px]">architecture</span>
        </div>
        <div class="pt-1">
          <span class="text-neutral-300"><strong class="text-neutral-100">Rigid-flex:</strong> a nyák egyes részei merevek, más részei pedig hajlékonyak.</span>
        </div>
      </li>
      <li class="flex items-start gap-4 group">
        <div class="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#76e594]/10 border border-[#76e594]/20 transition-colors group-hover:bg-[#76e594]/20">
          <span class="material-icons !text-[#76e594] !text-[20px]">radar</span>
        </div>
        <div class="pt-1">
          <span class="text-neutral-300"><strong class="text-neutral-100">Impedancia illesztett:</strong> nagy sebességű és rádiófrekvenciás paneleknél a gyártási paramétereket figyelembe véve tervezett áramkörök.</span>
        </div>
      </li>
    </ul>`,
      imgUrlThree: 'images/nyomtatott/img3.png',
      descriptionFour: '',
      imgUrlFour: '',
      detailedContent: '',
    },
    {
      id: 'kapcsolasi-rajz',
      title: 'Kapcsolási rajz',
      imgUrl: 'images/about/about-img2.jpg',
      description:
        'Miután már van rendszertervünk, megtervezzük az áramkör kapcsolási rajzát. Több mint tízéves tapasztalatunk van nagy sebességű, RF, analóg áramkörök, tápegységek és komplex, magas intergáltságú elektronikák tervezésében. Az elmúlt években jelentős gyakorlatot szereztünk az IoT megoldások terén is.',
      descriptionOne:
        'Sokan nem is gondolnák, de az elvirajzok tervezése gyakran táblán, papírlapon, szalvétán, vagy épp valamilyen szimulációs szoftverben kezdődik el. Aztán természetesen az integrált tervezőrendszerünk elvi kapcsolási rajz tervező részében folytatódik. Általában nem egy nagy lapon lesz megrajzolva a kapcsolási rajz, hiszen azt akarjuk, hogy jól áttekinthetőek legyenek a munka egyes részletei. A funkcionálisan együvé tartozó részek kerülnek egy-egy lapra és ezeket a blokkokat magasabb szinten lévő lapokon kapcsoljuk egymáshoz. Ezt a tervezési struktúra lehetővé teszi számunkra, hogy akár többezer alkatrészt tartalmazó berendezés kapcsolási rajza is áttekinthető maradjon.',
      imgUrlOne: 'images/kapcsolasirajz/img1.png',
      descriptionTwo:
        'Az elvi kapcsolási rajz egy absztrakciós eszköz, egy grafikus nyelv. A kapcsolási rajz nem azt kell tükrözze, hogyan fog kinézni a megtervezendő panel, sokkal inkább azt kell megmutassa, hogyan fog működni a megtervezett áramkör. Ne tévesszen meg senkit sem az a sztereotípia, miszerint az áramkörtervezés nagy része rajzolási munka lenne. Mind munkaidőben, mind szaktudásban nagyon fontos része az áramkörtervezésnek a megfelelő alkatrészek kiválasztása. A kiválasztás során figyelembe kell venni azt, hogy az adott áramkörre milyen körülmények fognak hatni, valamint azt is, hogy milyen szabványok és egyéb előírások érintik az adott áramkör működését.',
      imgUrlTwo: 'images/kapcsolasirajz/img2.png',
      descriptionThree:
        'Arra is sor szokott kerülni hogy olyan partnerekkel dolgozunk együtt, akik hozzánk hasonlóan szintén áramkörtervezéssel foglalkoznak. Számos ilyen partnerünk van. Egy részük saját termékét fejleszti, gyártja, míg mások hozzánk hasonlóan tervezőirodát működtetnek. Azért kérnek fel bennünket az együttműködésre, mert a kapacitásukat így jobban tudják optimalizálni és a számukra leginkább kritikus fejlesztési lépésekre fókuszálhatnak. A tápegységek amiket tervezünk az áramköreinkhez, a legtöbb esetben kapcsolóüzeműek, hogy jó hatásfokkal rendelkező áramköröket tervezhessünk. Az áramkörök szinte mindegyikén van valamilyen okosság, egy vagy akár több mikrovezérlő, esetleg FPGA vagy más céláramkör vagy modul. A tervezőink kreatívan használják a különböző színeket, ábrákat, vonal stílusokat, hogy ezekkel az eszközökkel is még informatívabbá, könnyebben értelmezhetővé tegyék az adott kapcsolást. ',
      imgUrlThree: 'images/kapcsolasirajz/img3.png',
      descriptionFour: '',
      imgUrlFour: '',
      detailedContent: '',
    },
    {
      id: 'mechanikai-tervezes',
      title: 'Mechanikai tervezés',
      imgUrl: 'images/about/about-img4.jpg',
      description:
        'Az elkészült nyomtatott áramkörhöz kollégáink burkolatot terveznek a megrendelő igényei szerint. Prototípus házakat tudunk készíteni 3D nyomtatással, CNC megmunkálással, PU vákuumöntéssel LPM technológiával és kisszériás fröccsöntőszerszámmal.',
      descriptionOne:
        'Elektronikai fejlesztő cég vagyunk, ez nem vitás. Ez az amihez a legjobban értünk. Jogosan merül fel tehát a kérdés, miért foglalkozunk akkor mechanikai tervezéssel? Amikor egy elektronikát legyártunk, az szinte minden esetben valamilyen készülékházba fog kerülni. A készülékház megtervezése egy komplex feladat.Gyakran szenzorokat tervezünk. A ház védeni fogja az elektronikát a külső behatásoktól. Ugyanakkor bizonyos fizikai jellemzőket „be kell engednünk” a panelen lévő szenzorig. A tervezés során tekintettel kell lenni az elektronika működésére, hol milyen szenzorok vannak rajta. Akár, ha csak egy egyszerű hőmérséklet szenzort veszünk példaképp, akkor nagyon nem mindegy, hogyan oldjuk meg, hogy a mérendő hőmérséklet optimálisan tudjon hatni a szenzorra.',
      imgUrlOne: 'images/mechanikai/img1.jpg',
      descriptionTwo:
        'Egyszerűbb tervezési feladatokat saját munkatársaink is el tudnak végezni. Abban az esetben, ha komplex készüléket, professzionális burkolatot kell tervezni, az együttműködő partnereinkhez fordulunk segítségért. A Barna Design a burkolat és az arculat megtervezésében nyújt professzionális szolgáltatást. A Plastic-Form Kft kiváló partnerünk, a komplex mechanikai tervezésben és a műanyagalakító szerszámok tervezésében velük dolgozunk együtt. Több évtizedes tapasztalatuknak és a műanyagiparra való széles rálátásuknak köszönhetően eddig még nem találkoztunk olyan kihívással, amit ne tudtak volna megoldani.',
      imgUrlTwo: 'images/mechanikai/img2.png',
      descriptionThree: '',
      imgUrlThree: '',
      descriptionFour: '',
      imgUrlFour: '',
      detailedContent: '',
    },
    {
      id: 'beagyazott-szoftverek',
      title: 'Vezérlőszekrény tervezése célgépekhez, PLC programozás',
      imgUrl: 'images/szofvarek/img1.jpg',
      description:
        'Vezérlőszekrény tervezése célgépekhez, PLC programozás, Ebben az üzletágban elsősorban ipari partnereink számára építünk vezérlőszekrényeket, PLC-s vezérléseket. A célgépek mechanikai és pneumatikus részeit a debreceni partnerünk a Plastic-Form Kft gyártja le az autóipari partnerei számára. Mi ezekhez a gépekhez tervezzük meg a vezérlést, majd megépítjük a vezérlőszekrényt, szükség esetén közreműködünk a szenzorok és a beavatkozók bekötésében, megírjuk a PLC programot.',
      descriptionOne:
        'A cégünk név választásakor a RENDSZER szó belefoglalása tudatos volt. Mint ahogyan az is, hogy ezt többesszámban használjuk. Nap mint nap rendszereket építünk, a munkánk során folyamatosan rendszerekben gondolkodunk. A leggyakoribb termékek amiket gyártunk vagy valamiféle szenzorok, vagy beavatkozó elemek, esetleg ezek különféle kombinációi. Nem nehéz belátni, hogy a legkisebb szenzornak is csak akkor van értelme, ha a jelzést képes eljuttatni a felhasználóhoz. Példaképpen bemutatom, hogyan néz ki a jelnek az útja egy hűtőház hőmérsékletének a mérésekor, ez a példa kiválóan be fogja mutatni, később ezeknek a szenzoroknak a sokaságából hogyan fognak felépülni a rendszereink:',
      imgUrlOne: 'images/szofvarek/img2.png',
      descriptionTwo:
        'Az ügyfél hűtőházakat üzemeltető és karbantartó cég, azt szeretnék, hogy amennyiben valahol a hőmérséklet emelkedni kezd a megengedett érték fölé, akkor erről a karbantartó személyzet azonnal riasztást kapjon. Mindemellett az ügyfeleik számára lehetőséget kell biztosítani, hogy bármikor betekintsenek a hűtőházak hőmérsékleti adataiba akár visszamenőleg is ellenőrzés céljából. A hőmérsékleteket a zTemp LoRaWAN szenzoraink mérik. A DS18B20-as hőmérséklet szenzor érzékeli a levegő hőmérsékletét a hűtőházban. Ezt olvassa ki öt percenként a zTemp processzora, és továbbítja a beépített antennája segítségével az úgynevezett subGigaHertzes sávban a LoRaWAN gateway-ek irányába. A hazai példánkban az Antenna Hungária vagy az IoT Zrt Kerlink vagy Mikrotik LoRa átjárói veszik a jeleket. Az alkalmazott hálózati szerver a szolgáltatótól függ, lehet akár Loriot vagy Chirpstack, TTN, Helium is. A hálózati szerverek az applikációs szerverünkre továbbítják a jeleket.',
      imgUrlTwo: 'images/szofvarek/img3.png',
      descriptionThree:
        'Applikációs szerverként ebben az esetben a TagoIO szolgáltatását használjuk, ahol lehetőség van egyaránt az adatok grafikus megjelenítésére valamint az értékekre figyelést is be tudunk állítani, így határérték átlépése esetén a rendszer automatikusan üzeneteket küld a felhasználónak. Az üzenetek lehetnek push üzenetek közvetlenül a Tago applikációjából, vagy email de akár SMS is. A grafikonok akár webes felületen, akár mobiltelefonos applikációban is visszanézhetőek az arra feljogosított felhasználóknak. Az adatok számos eszközön és szoftveren át jutnak el a felhasználóig, mindezért cserbe rugalmas, költséghatékony, korszerű informatikai rendszerben kapcsolódnak össze a szenzoraink a hozzájuk rendelt ügyfelekkel. A rendszerünk robusztus,  megbízhatósága így kiemelkedően magas tud lenni, mindemellett mégis elmondhatjuk, hogy viszonylag egyszerű, könnyen karbantartható és skálázható.',
      imgUrlThree: 'images/szofvarek/img4.png',
      detailedContent: '',
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
 /**
   * Kinyeri az első HÁROM mondatot a kiemeléshez.
   * HTML tartalom esetén (pl. <ul>, <p>) null-t ad vissza, hogy ne rontsa el a formázást.
   */
  getHighlightedSentence(fieldName: string): string | null {
    const service = this.getServiceData();
    const text = service ? (service as any)[fieldName] : '';

    // Biztonsági ellenőrzés: Ha HTML van benne, ne vágjuk szét
    if (!text || (text.includes('<') && text.includes('>'))) return null;

    // Regex: 1-től 3 mondatig terjedő szakasz keresése
    const match = text.match(/([^.!?]+[.!?]+(?:\s|$)){1,3}/);
    return match ? match[0].trim() : null;
  }

  getFormattedText(fieldName: string): string[] {
    const service = this.getServiceData();
    let text = service ? (service as any)[fieldName] : '';
    if (!text) return [];

    // Ha HTML tartalom van benne, egyben adjuk vissza a listában
    if (text.includes('<') && text.includes('>')) {
      return [text];
    }

    // Minden leírás mezőnél megpróbáljuk a kiemelést
    const fieldsWithHighlight = ['descriptionOne', 'descriptionTwo', 'descriptionThree', 'descriptionFour'];
    
    const highlight = this.getHighlightedSentence(fieldName);
    if (fieldsWithHighlight.includes(fieldName) && highlight) {
      text = text.replace(highlight, '').trim();
    }

    const allSentences = text.match(/[^.!?]+[.!?]+(?=\s|$)/g) || [text];
    const chunks: string[] = [];
    const sentencesPerParagraph = 4;

    for (let i = 0; i < allSentences.length; i += sentencesPerParagraph) {
      const chunk = allSentences.slice(i, i + sentencesPerParagraph).join(' ');
      if (chunk.trim()) chunks.push(chunk);
    }

    return chunks;
  }


}
