import { Component } from '@angular/core';

import { HeroComponent } from "./hero/hero.component";
import { FeaturesTopComponent } from "./features-top/features-top.component";
import { FeaturesComponent } from "../../features/features.component";
import { CapabilitiesTopComponent } from "./capabilities-top/capabilities-top.component";
import { CapabilitiesComponent } from './capabilities/capabilities.component';
import { MatIconModule } from '@angular/material/icon';
import { ContactSectionComponent } from "./contact-section/contact-section.component";
import { FormContactComponent } from "./contact-section/form-contact/form-contact.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { BlogComponent } from './blog/blog.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, FeaturesTopComponent, FeaturesComponent, CapabilitiesTopComponent, CapabilitiesComponent, MatIconModule, ContactSectionComponent, FormContactComponent, FooterComponent, BlogComponent],
  templateUrl: './home.component.html',

})
export class HomeComponent {

}
