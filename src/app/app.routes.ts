import { Routes } from '@angular/router';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { ServicesLayoutComponent } from './layouts/services-layout/services-layout.component';
import { AboutLayoutComponent } from './layouts/about-layout/about-layout.component';

export const routes: Routes = [
  { 
    path: '', 
    component: HomeLayoutComponent, 
    pathMatch: 'full',
    data: { animation: 'HomePage' } 
  },
  { 
    path: 'services', 
    component: ServicesLayoutComponent,
    data: { animation: 'ServicesPage' } 
  }, 
  { 
    path: 'services/:id', 
    component: ServicesLayoutComponent,
    data: { animation: 'ServiceDetailPage' } 
  },
  { 
    path: 'about', 
    component: AboutLayoutComponent,
    data: { animation: 'AboutPage' } 
  },
  { path: '**', redirectTo: '' }
];