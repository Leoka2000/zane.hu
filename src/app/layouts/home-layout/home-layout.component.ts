import { Component } from '@angular/core';
import { HomeComponent } from '../../pages/home/home.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, HomeComponent],
  template: `
    <main class="min-h-screen w-full  relative flex flex-col">
      <div class="relative min-h-screen bg-[#000d01] overflow-hidden">
        <div
          class=" top-[4.6rem]   fixed right-0 z-20 pointer-events-none opacity-100"
        >
          <div class="relative">
            <img
              src="images/brand/szecsenytervplusz.jpg"
              alt="Szechenyi Terv Plusz"
              class="w-72  object-contain"
            />
            <!--        <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.1) 60%, rgba(0, 0, 0, 0) 100%)"></div> -->
          </div>
        </div>

        <app-navbar></app-navbar>

        <main
          class="relative z-10 min-h-screen w-full flex flex-col items-center justify-center"
        >
          <app-home></app-home>
        </main>

        <app-footer></app-footer>
      </div>
    </main>
  `,
})
export class HomeLayoutComponent {}
