import { Routes } from '@angular/router';
import { HomeLayoutComponent } from "./layouts/home-layout/home-layout.component";
import { BlogLayoutComponent } from './layouts/blog-layout/blog-layout.component';

export const routes: Routes = [
  { path: '', component: HomeLayoutComponent, pathMatch: 'full' }, 
  { path: 'blog', component: BlogLayoutComponent },
];