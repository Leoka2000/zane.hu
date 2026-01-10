import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutHeroComponent } from './about-hero/about-hero.component';
import { AboutZaneComponent } from './about-zane/about-zane.component';
import { AboutZaneHouseComponent } from './about-zane-house/about-zane-house.component';
import { BlogComponent } from '../home/blog/blog.component';
import { ContactSectionComponent } from '../home/contact-section/contact-section.component';
// Ellenőrizd az elérési utat!

@Component({
  selector: 'app-about-home',
  standalone: true,
  imports: [
    CommonModule,
    AboutHeroComponent,
    AboutZaneHouseComponent,
    BlogComponent,
    ContactSectionComponent,
  ],
  template: ` <div class="pt-12 ">
    <div class="overflow-visible  relative">
      <img
        src="images/blog/bg-pattern-hero.svg"
        alt="Background Pattern"
        class="absolute inset-0 w-full h-full  object-cover pointer-events-none z-[-1]"
      />
      <div class="">
        <app-about-hero></app-about-hero>
      </div>
    </div>
    <div class="2xl:px-52 lg:px-24 px-6 py-12">
      <app-about-zane-house></app-about-zane-house>
    </div>
    <div class="2xl:px-52 lg:px-20 px-6">
      <app-blog></app-blog>
    </div>
    <div class="2xl:px-52 lg:px-20 px-6"><app-contact-section></app-contact-section></div>
  </div>`,
})
export class AboutHomeComponent {}
