import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ServicesHomeComponent } from "../../pages/services-home/services-home.component";

@Component({
  selector: 'app-services-layout',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, ServicesHomeComponent],
  template: ` <main class="min-h-screen relative flex flex-col">
     <app-navbar></app-navbar>
 <app-services-home></app-services-home>
      <app-footer></app-footer>
     
    </main>`
})
export class ServicesLayoutComponent {

}
