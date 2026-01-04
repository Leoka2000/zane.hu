import { Routes } from '@angular/router';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { BlogLayoutComponent } from './layouts/blog-layout/blog-layout.component';
import { ServicesLayoutComponent } from './layouts/services-layout/services-layout.component';

export const routes: Routes = [
  { path: '', component: HomeLayoutComponent, pathMatch: 'full' },
  { path: 'blog', component: BlogLayoutComponent }, /* MUDAR DEPOIS PARA "SERVICES" */
   { path: 'services', component: ServicesLayoutComponent }, /* MUDAR DEPOIS PARA "SERVICES" */
  


];
