import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-success-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatIconModule],
  template: `
    <div class="bg-[#000d01]  p-6  text-center">
      <h2 mat-dialog-title class="!text-[#76e594] !text-2xl font-bold mb-2">Success!</h2>
      <mat-dialog-content class="!text-neutral-200 py-4">
        <mat-icon class="!text-[#76e594] !w-16 !h-16 !text-6xl mb-4">check_circle</mat-icon>
        <p class="text-lg">Your message has been sent successfully. We will get back to you shortly.</p>
      </mat-dialog-content>
      <mat-dialog-actions align="center" class="mt-4">
        <button mat-flat-button class="!bg-[#76e594] !text-[#000d01] font-bold" mat-dialog-close>CLOSE</button>
      </mat-dialog-actions>
    </div>
  `
})
export class SuccessDialogComponent {}