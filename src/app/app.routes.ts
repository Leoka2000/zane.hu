import { Routes } from '@angular/router';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { ServicesLayoutComponent } from './layouts/services-layout/services-layout.component';
import { AboutLayoutComponent } from './layouts/about-layout/about-layout.component';

export const routes: Routes = [
  { path: '', component: HomeLayoutComponent, pathMatch: 'full' },
  { path: 'services', component: ServicesLayoutComponent }, 
  { path: 'services/:id', component: ServicesLayoutComponent }, // Paraméteres útvonal
  { path: 'about', component: AboutLayoutComponent },
  { path: '**', redirectTo: '' } // Biztonság!!!
];