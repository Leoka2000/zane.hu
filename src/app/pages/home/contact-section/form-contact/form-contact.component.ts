import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { PrimaryButtonComponent } from '../../../../components/primary-button/primary-button.component';

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
    PrimaryButtonComponent
  ],
  templateUrl: './form-contact.component.html',
  styles: [`
   
    .form-wrapper {
      background-color: #000d01!important;
    }


    ::ng-deep .custom-material-form .mdc-notched-outline__leading,
    ::ng-deep .custom-material-form .mdc-notched-outline__notch,
    ::ng-deep .custom-material-form .mdc-notched-outline__trailing {
      border-color: rgba(118, 229, 148, 0.3) !important;
    }

    /* 3. Focus State (When clicking the input) */
    ::ng-deep .custom-material-form .mat-mdc-form-field.mat-focused .mdc-notched-outline__leading,
    ::ng-deep .custom-material-form .mat-mdc-form-field.mat-focused .mdc-notched-outline__notch,
    ::ng-deep .custom-material-form .mat-mdc-form-field.mat-focused .mdc-notched-outline__trailing {
      border-color: #76e594 !important;
      border-width: 2px !important;
    }

    ::ng-deep .custom-material-form .mdc-floating-label {
      color: #76e594 !important;
      opacity: 0.7;
    }
    ::ng-deep .custom-material-form .mat-focused .mdc-floating-label {
      opacity: 1;
    }
    ::ng-deep .custom-material-form input, 
    ::ng-deep .custom-material-form textarea {
      color: white !important;
      caret-color: #76e594 !important;
    }


    ::ng-deep .custom-checkbox .mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background {
      background-color: #76e594 !important;
      border-color: #76e594 !important;
    }


    .custom-submit-btn {
      border: 1px solid #76e594 !important;
      color: #76e594 !important;
      padding: 25px 50px !important;
      font-size: 1.1rem !important;
      transition: all 0.3s  !important;
    }
  `]
})
export class FormContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      terms: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Success:', this.contactForm.value);
      
      // LOGIC TO CLEAN THE FORM
      this.contactForm.reset();
      
 
      Object.keys(this.contactForm.controls).forEach(key => {
        const control = this.contactForm.get(key);
        control?.setErrors(null);
        control?.markAsPristine();
        control?.markAsUntouched();
      });

    } else {
      console.log('Formulário inválido');
      this.contactForm.markAllAsTouched();
    }
  }
}