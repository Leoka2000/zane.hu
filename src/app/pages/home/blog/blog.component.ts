import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';
import { BlogDialogComponent } from '../../../components/dialogs/blog-dialog/blog-dialog.component';


@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, PrimaryButtonComponent, MatIconModule, MatDialogModule],
  templateUrl: './blog.component.html',
})
export class BlogComponent {
  private dialog = inject(MatDialog);

  blogPosts: any[] = [
    {
      title: 'How Much Does Solar Installation Cost in Your City',
      date: 'July 24, 2025',
      imageUrl: 'images/blog/blog1-img1.png',
      link: 'solar-cost',
      
    },
    {
      title: 'Top 5 Benefits of Residential Solar in 2025',
      date: 'July 24, 2025',
      imageUrl: 'images/blog/blog2-img1.png',
      link: 'benefits',
     
    },
    {
      title: 'The Future of Grid Energy Storage Solutions',
      date: 'August 02, 2025',
        imageUrl: 'images/blog/blog4-img1.png',
      link: 'grid-future',
  
    },
    {
      title: 'Strategic Scaling for Hardware Startups',
      date: 'August 15, 2025',
       imageUrl: 'images/blog/blog5-img1.png',
      link: 'scaling-strategy',
      
    },
    {
      title: 'AI Integration in Modern Microcontrollers',
      date: 'September 01, 2025',
      imageUrl: 'images/blog/blog3-img1.png',
      link: 'ai-tech',
     
    }
  ];

  openPost(post: any) {
    this.dialog.open(BlogDialogComponent, {
      data: post, // Envia o objeto clicado para o diálogo
      width: '100%',
      maxWidth: '700px',
      panelClass: 'custom-dialog-panel',
      // Reduzi para 15px para um efeito "glassmorphism" elegante e performático
      backdropClass: 'backdrop-blur-[15px]' 
    });
  }
}