import { Component } from '@angular/core';
import { HomeComponent } from '../../pages/home/home.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [HomeComponent,NavbarComponent],
  template: `
    <main class="min-h-screen relative flex flex-col">
      <app-navbar></app-navbar>
      <app-home></app-home>
    </main>
  `,
})
export class HomeLayoutComponent {

}
