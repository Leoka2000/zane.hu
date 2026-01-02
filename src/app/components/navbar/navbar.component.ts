import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common'; // Required for [ngClass]
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [PrimaryButtonComponent, CommonModule],
  templateUrl: './navbar.component.html',
  styles: ``
})
export class NavbarComponent {
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // If scroll is more than 20px, turn on the blur effect
    this.isScrolled = window.scrollY > 20;
  }
}