import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import emailjs from '@emailjs/browser';
import { PrimaryButtonComponent } from '../../../../components/primary-button/primary-button.component';
import { SuccessDialogComponent } from '../../../../components/dialogs/success-dialog/success-dialog.component';
import { TranslateModule } from '@ngx-translate/core';

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
    MatDialogModule,
    PrimaryButtonComponent,
    TranslateModule
  ],
  templateUrl: './form-contact.component.html',
  styles: [
    `
      .form-wrapper {
        background-color: #000d01 !important;
        border-radius: 0.5rem !important;
      }

      ::ng-deep .custom-material-form .mat-mdc-text-field-wrapper {
        background-color: #000d01 !important;
      }
      ::ng-deep .custom-material-form .mat-mdc-form-field-focus-overlay {
        background-color: transparent !important;
      }

      /* Input Border Styling */
      ::ng-deep .custom-material-form .mat-mdc-form-field-error {
        color: #ff5252 !important;
        font-size: 12px;
      }

      /* Icon Dynamic Colors */
      .icon-error {
        color: #ff5252 !important;
        transition: color 0.3s ease;
      }
      .icon-success {
        color: #76e594 !important;
        transition: color 0.3s ease;
      }

      /* Checkbox Customization */
      ::ng-deep
        .custom-checkbox
        .mdc-checkbox__native-control:enabled:checked
        ~ .mdc-checkbox__background {
        background-color: #76e594 !important;
        border-color: #76e594 !important;
      }
    `,
  ],
})
export class FormContactComponent {
  private fb = inject(FormBuilder);
  private dialog = inject(MatDialog);

  isLoading = false;

  contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    terms: [false, Validators.requiredTrue],
  });

  // A "Heavy Validation" helper
  isInvalid(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  async onSubmit() {
    if (this.contactForm.valid && !this.isLoading) {
      this.isLoading = true;

      const templateParams = {
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        message: this.contactForm.value.message,
        terms: this.contactForm.value.terms ? 'Accepted' : 'Not Accepted',
      };

      try {
        await emailjs.send(
          'service_m9xwdke',
          'template_uo3c3g3',
          templateParams,
          'Wz8QOl_kyPBr6ZQT1'
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
    });
  }

  private resetForm() {
    this.contactForm.reset();
    Object.keys(this.contactForm.controls).forEach((key) => {
      const control = this.contactForm.get(key);
      control?.setErrors(null);
      control?.markAsPristine();
      control?.markAsUntouched();
    });
  }
}
