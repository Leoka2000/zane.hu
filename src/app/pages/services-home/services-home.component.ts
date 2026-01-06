import { Component } from '@angular/core';
import { ServicesHeroComponent } from "./services-hero/services-hero.component";
import { ZaneServicesComponent } from "./zane-services/zane-services.component";
import { AboutZaneComponent } from "../about-home/about-zane/about-zane.component";
import { ServiceAccordionComponent } from "./service-accordion/service-accordion.component";
import { ContactSectionComponent } from "../home/contact-section/contact-section.component";

@Component({
  selector: 'app-services-home',
  standalone: true,
  imports: [ServicesHeroComponent, ZaneServicesComponent, AboutZaneComponent, ServiceAccordionComponent, ContactSectionComponent],
  templateUrl: './services-home.component.html',
  styles: ``
})
export class ServicesHomeComponent {

}
