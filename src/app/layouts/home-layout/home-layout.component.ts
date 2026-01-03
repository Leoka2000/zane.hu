import { Component } from '@angular/core';
import { HomeComponent } from '../../pages/home/home.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from "../../components/footer/footer.component";
import { BlogHomeComponent } from "../../pages/blog-home/blog-home.component";

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, BlogHomeComponent, HomeComponent],
  template: `
    <main class="min-h-screen relative flex flex-col">
      <app-navbar></app-navbar>
      <app-home></app-home>
          <app-footer></app-footer>
    </main>
  `,
})
export class HomeLayoutComponent {

}
