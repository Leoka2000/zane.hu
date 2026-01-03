import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import emailjs from '@emailjs/browser';
import { SuccessDialogComponent } from '../success-dialog/success-dialog.component';
import { PrimaryButtonComponent } from '../../primary-button/primary-button.component';

@Component({
  selector: 'app-quotation-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    PrimaryButtonComponent
  ],
  templateUrl: './quotation-dialog.component.html',
  styles: [`
    .dialog-container { background-color: #000d01; color: white; padding: 24px; border-radius: 8px; }
    ::ng-deep .mat-mdc-form-field-focus-overlay { background-color: transparent !important; }
    ::ng-deep .custom-field .mat-mdc-text-field-wrapper { background-color: #000d01 !important; border: 1px solid #404040 !important; border-radius: 4px !important; }
    ::ng-deep .custom-field .mdc-text-field--focused .mat-mdc-text-field-wrapper { border-color: #76e594 !important; }
    ::ng-deep .mat-mdc-select-arrow { color: #76e594 !important; }
    ::ng-deep .mat-mdc-select-value-text { color: white !important; }
    ::ng-deep .mat-mdc-form-field-error { color: #ff5252 !important; font-size: 12px; }
    .icon-error { color: #ff5252 !important; }
    .icon-success { color: #76e594 !important; }
  `]
})
export class QuotationDialogComponent {
  private fb = inject(FormBuilder);
  public dialogRef = inject(MatDialogRef<QuotationDialogComponent>);
  private dialog = inject(MatDialog);

  isLoading = false;

  // Heavy Validation
  quoteForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern('^[0-9+\\s-]*$'), Validators.minLength(8)]],
    service: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  // Helper for template logic
  isInvalid(controlName: string): boolean {
    const control = this.quoteForm.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  closeDialog() {
    if (!this.isLoading) {
      this.dialogRef.close();
    }
  }

  async onSubmit() {
    if (this.quoteForm.valid && !this.isLoading) {
      this.isLoading = true;
      const templateParams = this.quoteForm.value;

      try {
        await emailjs.send("service_m9xwdke", "template_o51q5ab", templateParams, "Wz8QOl_kyPBr6ZQT1");
        this.isLoading = false;
        this.dialogRef.close();
        this.openSuccessDialog();
      } catch (error) {
        this.isLoading = false;
        console.error('EmailJS Error:', error);
      }
    } else {
      this.quoteForm.markAllAsTouched();
    }
  }

  private openSuccessDialog() {
    this.dialog.open(SuccessDialogComponent, {
      width: '400px',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '150ms'
    });
  }
}