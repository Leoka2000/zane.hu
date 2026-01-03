import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';
import { BlogDialogComponent } from '../../../components/dialogs/blog-dialog/blog-dialog.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    CommonModule,
    PrimaryButtonComponent,
    MatIconModule,
    MatDialogModule,
  ],
  templateUrl: './blog.component.html',
})
export class BlogComponent {
   @ViewChildren('card') cards!: QueryList<ElementRef>;
  private dialog = inject(MatDialog);
  public visibleCards: boolean[] = [];

  blogPosts: any[] = [
    {
      title: 'Hordozható EKG-mérő műszer prototípusának megtervezése',
      date: 'Október 4, 2024',
      imageUrl: 'images/blog/blog1-img1.png',
      link: 'HU-UZB-Startup',
      tag: 'Innovation',
      descricao: `Sajtóközlemény\nHordozható EKG-mérő műszer prototípusának megtervezése, gyártása és szoftverkidolgozása.\n\nA ZANE systems Kft. 29,4 millió forint vissza nem térítendő támogatást nyert a Magyar-Üzbég Startup Program (HU-UZB-Startup-2022) pályázatán. A projekt eredményeként egy korszerű, hordozható EKG mérőműszer prototípusa jön létre.\n\nA projekt keretében olyan eszközt fejlesztünk, amely a páciens jeleit akár otthonában, 24 órás folyamatos méréssel képes ellenőrizni. A készülék a legkorszerűbb wavelet-delta jelfeldolgozó algoritmust használja, megbízhatóbb működést és precízebb diagnózist tesz lehetővé.`,
    },
    {
      title: 'Modern üzleti és termelési kihívásokhoz való alkalmazkodás',
      date: 'Május 18, 2022',
      imageUrl: 'images/blog/blog2-img1.png',
      link: 'GINOP_PLUSZ-1.2.3',
      tag: 'Strategy',
      descricao: `GINOP_PLUSZ-1.2.3-21-2022-01595 A ZANE systems Kft. modern üzleti és termelési kihívásokhoz való alkalmazkodását segítő fejlesztések megvalósítása
Projekt tartalmának bemutatása:

Cégünk jelenlegi épületének kihasználtsága maximális, éppen ezért szükséges ingatlan beruházást megvalósítani annak érdekében, hogy a fejlesztések során a tevékenységünkhöz kapcsolódó logisztikai és gyártási feladatok egy önálló épületben tudjanak működni, ennek alapján a jobb munkakörnyezet, a várhatóan növekedő megrendelőink kiszolgálása optimalizálható.

Lézervágó berendezéseket kívánunk beszerezni, amelyekkel az általunk gyártott készülékekbe alkatrészeket fogunk tudni legyártani házon belül, valamint előlap feliratozást tudunk gravírozni. Jelenleg ezt a tevékenységet alvállalkozó bevonásával végezzük, a saját eszközök használatával megszüntethető az alvállalkozói kitettség, a gyártási idő és folyamat rövidítését elérhetjük, mely által kapacitást tudunk bővíteni. 

Az informatikai WorkCent csomag beszerzése a tervezési és programfejlesztési tevékenységünk fejlesztéséhez nélkülözhetetlen. A lézervágó és jelölő berendezések az elektronikai gyártáshoz szükségesek. A tesztállomás és a fröccsöntő szerszám a zTag GPS-es szarvasmarha nyomkövető termékünk gyártásához szükségesek. A jelenlegi módon gyártott termék a piac számára nagyon drága, és nem megfelelő minőségű. A beszerzéssel a gyártási folyamatot gyorsíthatjuk, minőségben megfelelő terméket tudunk előállítani, melynek következtében a termék ár-érték aránya lényegesen piacképesebb, a termékből többet tudunk értékesíteni, melynek következtében piaci pozíciónk erősödik. 

A minőségben döntő változás a fröccsöntő berendezés használatával, hogy a termék vízhatlanságát és ütésállóságát tudjuk javítani. A projektmenedzsment képzés annak érdekében szükséges, hogy a projekt tervezés és megvalósítás során a kapcsolódó folyamatokat is optimalizálni tudjuk cégünknél. A képzés elvégzésével a feladatok szervezése, nyomonkövetése, felelősök meghatározása hozzájárul ahhoz, hogy a cég működése hatékonyabb legyen. A felhő alapú megoldások képzés elvégzésével az adminisztratív és fejlesztési folyamatok hatékonyságát szeretnénk elősegíteni. A marketing tanácsadás igénybevételével cégünk arculatának és termékpalettájának láthatóságát kívánjuk jobban elérni a szakértői bevonással, elősegítve ezáltal a piaci növekedésünket. A projektben tervezett fejlesztési elemek megvalósításával a hatékonyság tapasztalható lesz, melynek következtében a cégünk alkalmazkodóképessége fejlődik a gyorsuló technológiai, gazdasági és társadalmi változásokhoz, ami hozzájárul a válságálló és fenntartható működésünkhöz. A beruházás megvalósításával új technológiák alkalmazása és a vállalati folyamatok hatékonyságának javítása is megvalósul. Mindezek eredményeként javul a versenyképességünk, a hatékonyabb és korszerű eszközök használatával növekedési potenciál realizálható. A cégünknél tervezett fejlesztés megvalósítása javítja a technológiai folyamatokat, versenyképességet és erőforrás-hatékonyságot, ezen keresztül fokozni tudja majd a termelékenységet.

Mindezeknek köszönhetően a tervezett fejlesztéssel a vállalkozás kapacitása bővülni fog a piaci igények kiszolgálása érdekében. A projekt tervezetten 2023.12.15-ig kerül megvalósításra a cég székhelyén, Hajdúsámsonban

Kedvezményezett neve: ZANE systems Korlátolt felelősségű Társaság

Projekt címe: A ZANE systems Kft. modern üzleti és termelési kihívásokhoz való alkalmazkodását segítő fejlesztések megvalósítása

Projekt azonosítószáma: GINOP_PLUSZ-1.2.3-21-2022-01595

Feltételesen visszatérítendő támogatás összege: 34.033.062 Ft

Támogatás mértéke: 70%

Projekt tervezett befejezési dátuma: 2023.12.15`,
    },
    {
      title: 'Kapacitás- és gyártástechnológia fejlesztése',
      date: 'Október 10, 2021',
      imageUrl: 'images/blog/blog4-img1.png',
      link: 'GINOP-1.2.2',
      tag: 'Tech',
      descricao: `2015-ben adtuk be a “Kapacitás- és gyártástechnológia fejlesztése a ZANE systems Kft-nél” című pályázatunkat, melynek célja gépparkunk fejlesztése volt, egy olyan beültetőgép megvásárlásával, mellyel cégünk a tervezési és prototípusgyártási szolgáltatásait bővítve a jövőben kis  szériás  gyártási feladatokat is el tud látni.

A Gazdaságfejlesztési és Innovációs Operatív Program keretén belül a Nemzetgazdasági Minisztérium, mint Támogató által 2015.
június 9-én kiadott „Mikro-, kis- és középvállalkozások kapacitásbővítő beruházásainak támogatása ” c. felhívása alapján a
ZANE systems Korlátolt Felelősségű Társaság  támogatási kérelmét (GINOP-1.2.2-15-2015-00476 ) a
Gazdaságfejlesztési Programok Irányító Hatóságának vezetője 9 025 563 Ft azaz kilencmillió-huszonötezer-ötszázhatvanhárom
Forint összegű támogatásra érdemesnek ítélte.

Az elnyert összegből egy a Mechatronika M10V beültető gépet vásároltunk. A géppel az SMT laboratóriumunkban mostantól akár 0201, QFN és BGA alkatrészek beültetésére is alkalmas technológiával rendelkezünk.

· a kedvezményezett neve: ZANE systems Korlátolt Felelősségű Társaság,

· a projekt címe: „Kapacitás- és gyártástechnológia fejlesztése a ZANE systems Kft-nél”

· a szerződött támogatás összege: 9 025 563 Ft

· a támogatás mértéke (%-ban): 70 %`,
    },
    {
      title: 'Gépbeszerzés és háztartási kisgépszervíz építése',
      date: 'December 12, 2020',
      imageUrl: 'images/blog/blog5-img1.png',
      link: 'GINOP-1.2.3',
      tag: 'Strategy',
      descricao: `2015-ben adtuk be a “Kapacitás- és gyártástechnológia fejlesztése a ZANE systems Kft-nél” című pályázatunkat, melynek célja gépparkunk fejlesztése volt, egy olyan beültetőgép megvásárlásával, mellyel cégünk a tervezési és prototípusgyártási szolgáltatásait bővítve a jövőben kis  szériás  gyártási feladatokat is el tud látni.

A Gazdaságfejlesztési és Innovációs Operatív Program keretén belül a Nemzetgazdasági Minisztérium, mint Támogató által 2015.
június 9-én kiadott „Mikro-, kis- és középvállalkozások kapacitásbővítő beruházásainak támogatása ” c. felhívása alapján a
ZANE systems Korlátolt Felelősségű Társaság  támogatási kérelmét (GINOP-1.2.2-15-2015-00476 ) a
Gazdaságfejlesztési Programok Irányító Hatóságának vezetője 9 025 563 Ft azaz kilencmillió-huszonötezer-ötszázhatvanhárom
Forint összegű támogatásra érdemesnek ítélte.

Az elnyert összegből egy a Mechatronika M10V beültető gépet vásároltunk. A géppel az SMT laboratóriumunkban mostantól akár 0201, QFN és BGA alkatrészek beültetésére is alkalmas technológiával rendelkezünk.

· a kedvezményezett neve: ZANE systems Korlátolt Felelősségű Társaság,

· a projekt címe: „Kapacitás- és gyártástechnológia fejlesztése a ZANE systems Kft-nél”

· a szerződött támogatás összege: 9 025 563 Ft

· a támogatás mértéke (%-ban): 70 %

· a projekt tényleges befejezési dátuma : 2016.11.14`,
    },
    {
      title: 'Innovatív technológiai beruházás a ZANE systems-nél',
      date: 'Június 21, 2019',
      imageUrl: 'images/blog/blog3-img1.png',
      link: 'GINOP-1.2.10',
      tag: 'Tech',
      descricao: `-a kedvezményezett neve:  ZANE systems Korlátolt Felelősségű Társaság

-a projekt címe: Innovatív technológiai beruházás a ZANE systems Kft-nél

-a szerződött támogatás összege: 10 563 637 Ft

-a támogatás mértéke (%-ban): 69,99 %

-a projekt tartalmának bemutatása: A projekt megvalósítása során beszerzésre és beüzemelésre került 

1 db M10V gép
-a projekt befejezési dátuma: 2021.05.03.

-projekt azonosító száma: GINOP-1.2.10-19-2019-00076`,
    },
  ];

   ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = this.cards
            .toArray()
            .findIndex((el) => el.nativeElement === entry.target);

          if (index !== -1) {
            this.visibleCards[index] = entry.isIntersecting;
          }
        });
      },
      {
        threshold: 0.3, // triggers when 30% visible
      }
    );

    this.cards.forEach((card) => observer.observe(card.nativeElement));
  }

  openPost(post: any) {
    this.dialog.open(BlogDialogComponent, {
      data: post,
      width: '100%',
      maxWidth: '800px',
      maxHeight: '90vh', // llimita a altura para permitir scroll
      panelClass: 'custom-dialog-panel',
      backdropClass: 'backdrop-blur-[15px]',
    });
  }
}
