import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutHeroComponent } from './about-hero/about-hero.component';
import { AboutZaneComponent } from './about-zane/about-zane.component';
import { AboutZaneHouseComponent } from "./about-zane-house/about-zane-house.component";
import { BlogComponent } from "../home/blog/blog.component";
import { ContactSectionComponent } from "../home/contact-section/contact-section.component";
// Ellenőrizd az elérési utat!

@Component({
  selector: 'app-about-home',
  standalone: true,
  imports: [CommonModule, AboutHeroComponent, AboutZaneHouseComponent, BlogComponent, ContactSectionComponent],
  template: ` <div class="">
    <div class="overflow-hidden relative">
      <img
        src="images/blog/bg-pattern-hero.svg"
        alt="Background Pattern"
        class="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
      />
      <div>
        <app-about-hero></app-about-hero>
      </div>
    </div>
    <div class="md:px-24">
      <app-about-zane-house></app-about-zane-house>
    </div>
    <div class="px-20 ">
      <app-blog></app-blog>
    </div>
    <div><app-contact-section></app-contact-section></div>
  </div>`,
})
export class AboutHomeComponent {}
