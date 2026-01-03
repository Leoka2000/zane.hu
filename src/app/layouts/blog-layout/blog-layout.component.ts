import { Component } from '@angular/core';
import { BlogHomeComponent } from '../../pages/blog-home/blog-home.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';


@Component({
  selector: 'app-blog-layout',
  standalone: true,
  imports: [BlogHomeComponent, NavbarComponent, FooterComponent],
  template: `
    <main class="min-h-screen relative flex flex-col">
     <app-navbar></app-navbar>
     idfdssididfsfufuidfdsfuhi
      <app-footer></app-footer>
     
    </main>
  `,
})
export class BlogLayoutComponent {}
