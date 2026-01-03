import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-blog-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatIconModule],
  templateUrl: './blog-dialog.component.html',
  styles: [`
    :host { display: block; }
    .grotesk { font-family: 'Space Grotesk', sans-serif; }
  `]
})
export class BlogDialogComponent {
  //  @Inject(MAT_DIALOG_DATA) recebe o objeto "post"
  constructor(
    public dialogRef: MatDialogRef<BlogDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  close() {
    this.dialogRef.close();
  }
}