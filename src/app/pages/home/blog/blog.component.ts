import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TranslateModule, TranslateService } from '@ngx-translate/core'; 
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';
import { BlogDialogComponent } from '../../../components/dialogs/blog-dialog/blog-dialog.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, PrimaryButtonComponent, MatIconModule, MatDialogModule, TranslateModule],
  templateUrl: './blog.component.html',
})
export class BlogComponent {
  private dialog = inject(MatDialog);
  private translate = inject(TranslateService);

  blogPosts = [
    { imageUrl: 'images/blog/blog1-img1.png', link: 'HU-UZB-Startup' },
    { imageUrl: 'images/blog/blog2-img1.png', link: 'GINOP_PLUSZ-1.2.3' },
    { imageUrl: 'images/blog/blog4-img1.png', link: 'GINOP-1.2.2' },
    { imageUrl: 'images/blog/blog5-img1.png', link: 'GINOP-1.2.3' },
    { imageUrl: 'images/blog/blog3-img1.png', link: 'GINOP-1.2.10' }
  ];

  openPost(post: any, index: number) {
    const translatedPost = {
      ...post,
      title: this.translate.instant(`blog.posts.${index}.title`),
      descricao: this.translate.instant(`blog.posts.${index}.desc`),
      date: this.translate.instant(`blog.posts.${index}.date`)
    };

    this.dialog.open(BlogDialogComponent, {
      data: translatedPost,
      width: '100%',
      maxWidth: '800px',
    
      maxHeight: '90vh',
      panelClass: 'custom-dialog-panel',
      backdropClass: 'backdrop-blur-[15px]',
    });
  }
}