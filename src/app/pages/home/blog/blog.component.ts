import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';

interface BlogPost {
  title: string;
  date: string;
  imageUrl: string;
  link: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, PrimaryButtonComponent, MatIconModule],
  templateUrl: './blog.component.html',
})
export class BlogComponent {
  blogPosts: BlogPost[] = [
    {
      title: 'How Much Does Solar Installation Cost in Your City',
      date: 'July 24, 2025',
      imageUrl: 'assets/solar-installation.jpg',
      link: '#'
    },
    {
      title: 'Top 5 Benefits of Residential Solar in 2025',
      date: 'July 24, 2025',
      imageUrl: 'assets/solar-benefits.jpg',
      link: '#'
    },
    {
      title: 'Solar ROI Calculator: How Much Will You Really Save?',
      date: 'July 24, 2025',
      imageUrl: 'assets/solar-roi.jpg',
      link: '#'
    },
    {
      title: 'The Future of Grid Energy Storage Solutions',
      date: 'August 02, 2025',
      imageUrl: 'assets/grid-storage.jpg',
      link: '#'
    },
    {
      title: 'Maintaining Your Solar Panels for Peak Efficiency',
      date: 'August 10, 2025',
      imageUrl: 'assets/maintenance.jpg',
      link: '#'
    }
  ];

  navigateToPost(link: string) {
    // If using Angular Router: this.router.navigate([link]);
    // For now, standard link behavior:
    window.location.href = link;
  }
}