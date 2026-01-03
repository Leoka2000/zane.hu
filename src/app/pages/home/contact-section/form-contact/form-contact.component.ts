import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import emailjs from '@emailjs/browser';
import { PrimaryButtonComponent } from '../../../../components/primary-button/primary-button.component';
import { SuccessDialogComponent } from '../../../../components/dialogs/success-dialog/success-dialog.component';

@Component({
  selector: 'app-form-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    PrimaryButtonComponent
  ],
  templateUrl: './form-contact.component.html',
  styles: [`
    .form-wrapper { background-color: #000d01 !important; position: relative; }
    ::ng-deep .custom-material-form .mat-mdc-text-field-wrapper { background-color: #000d01 !important; }
    ::ng-deep .custom-material-form .mat-mdc-form-field-focus-overlay { background-color: transparent !important; }
    ::ng-deep .custom-material-form .mdc-line-ripple::before { border-bottom-color: rgba(118, 229, 148, 0.3) !important; }
    ::ng-deep .custom-material-form .mat-focused .mdc-line-ripple::after { border-bottom-color: #76e594 !important; }
    ::ng-deep .custom-material-form .mdc-floating-label { color: #76e594 !important; opacity: 0.7; }
    ::ng-deep .custom-material-form .mat-focused .mdc-floating-label { opacity: 1; }
    ::ng-deep .custom-material-form input, ::ng-deep .custom-material-form textarea { color: white !important; caret-color: #76e594 !important; }
    ::ng-deep .custom-checkbox .mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background { background-color: #76e594 !important; border-color: #76e594 !important; }
    ::ng-deep .mat-mdc-progress-spinner .mdc-circular-progress__determine-circle-graphic { stroke: #76e594 !important; }
  `]
})
export class FormContactComponent {
  contactForm: FormGroup;
  isLoading = false;
  private dialog = inject(MatDialog);

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      terms: [false, Validators.requiredTrue]
    });
  }

  async onSubmit() {
    if (this.contactForm.valid && !this.isLoading) {
      this.isLoading = true;
      
      const templateParams = {
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        message: this.contactForm.value.message,
        terms: this.contactForm.value.terms ? 'Accepted' : 'Not Accepted'
      };

      try {
        await emailjs.send(
          "service_m9xwdke",
          "template_uo3c3g3",
          templateParams,
          "Wz8QOl_kyPBr6ZQT1"
        );

        this.isLoading = false;
        this.openSuccessDialog();
        this.resetForm();
      } catch (error) {
        this.isLoading = false;
        console.error('EmailJS Error:', error);
      }
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  private openSuccessDialog() {
    this.dialog.open(SuccessDialogComponent, {
      width: '400px',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '150ms',
      disableClose: false
    });
  }

  private resetForm() {
    this.contactForm.reset();
    Object.keys(this.contactForm.controls).forEach(key => {
      const control = this.contactForm.get(key);
      control?.setErrors(null);
      control?.markAsPristine();
      control?.markAsUntouched();
    });
  }
}