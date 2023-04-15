import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { App } from 'src/app/models/app.model';
import { AppService } from 'src/app/services/app-service.service';

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
    console.log('form submi', this.appForm);
    if (this.appForm.status === 'VALID') {
      this.appService.addApp(this.appForm.value);
    }
  }

  private setupForm() {
    this.appForm = this.fb.group({
      appName: ['', [Validators.required]],
      appVersion: ['', [Validators.required, this.validateAppVersion]],
      appContact: ['', [Validators.required]],
    });
  }

  private validateAppVersion(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control) {
        return null;
      }
      return null;
    };
  }
}
