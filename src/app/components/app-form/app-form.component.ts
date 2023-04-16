import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { AppService } from 'src/app/services/app-service.service';

function validateAppVersion(): ValidatorFn {
  const versionRegex = /\d{1,2}\.\d{1,2}\.\d{1,2}/;

  return (control: AbstractControl): ValidationErrors | null => {
    const isCorrectVersionPattern = versionRegex.test(control.value);

    if (isCorrectVersionPattern) {
      return null;
    } else {
      return { versionPattern: true };
    }
  };
}

@Component({
  selector: 'app-form',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.scss'],
})
export class AppFormComponent {
  appForm!: FormGroup;

  constructor(private fb: FormBuilder, private appService: AppService) {
    this.setupForm();
  }

  onSubmit() {
    if (this.appForm.valid) {
      this.appService.addApp(this.appForm.value);
      this.appForm.reset();
    }
  }

  private setupForm() {
    this.appForm = this.fb.group({
      appName: ['', [Validators.required]],
      appVersion: ['', [Validators.required, validateAppVersion()]],
      appContact: ['', [Validators.required]],
    });
  }
}
