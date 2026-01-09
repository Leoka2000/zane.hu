import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { AboutHomeComponent } from '../../pages/about-home/about-home.component';

@Component({
  selector: 'app-about-layout',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, AboutHomeComponent],

  template: `<main
    class="min-h-screen bg-[#000d01]   relative overflow-hidden flex flex-col"
  >
    <div
      class=" top-[4.6rem] bg-transparent  fixed right-0 z-10 pointer-events-none"
    >
      <div class="">
        <img
          src="images/brand/szecsenytervplusz.jpg"
          alt="Szechenyi Terv Plusz"
          class="w-72  object-contain"
        />
        <!--   <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.1) 60%, rgba(0, 0, 0, 0) 100%)"></div> -->
      </div>

      <div class="relative z-20 pointer-events-none">
        <div class="fixed bottom-0 right-0">
          <img
            src="/images/brand/befektetesjovobe.png"
            alt="Befektetés a jövőbe"
            class="w-56  object-contain"
          />
          <!--  <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.1) 60%, rgba(0, 0, 0, 0) 100%)"></div> -->
        </div>
      </div>
    </div>
    <app-navbar></app-navbar>

    <app-about-home></app-about-home>

    <app-footer></app-footer>
  </main>`,
})
export class AboutLayoutComponent {}
