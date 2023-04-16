import { AfterViewInit, Component } from '@angular/core';
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
export class AppFormComponent implements AfterViewInit {
  appForm!: FormGroup;
  isEditing: boolean;

  constructor(private fb: FormBuilder, private appService: AppService) {
    this.isEditing = false;
    this.setupForm();
  }

  ngAfterViewInit(): void {
    this.appService.editingApp.subscribe((app) => {
      const hasApp = Object.keys(app).length > 1;
      if (hasApp) {
        this.isEditing = true;
        this.appForm.setValue(app);
      }
    });
  }

  onSubmit() {
    if (this.appForm.valid) {
      this.addOrUpdateApp();
    }
  }

  onCancelEditing() {
    this.resetForm();
  }

  private setupForm() {
    this.appForm = this.fb.group({
      appName: ['', [Validators.required]],
      appVersion: ['', [Validators.required, validateAppVersion()]],
      appContact: ['', [Validators.required]],
    });
  }

  private addOrUpdateApp() {
    if (this.isEditing) {
      this.appService.updateApp(this.appForm.value);
    } else {
      this.appService.addApp(this.appForm.value);
    }
    this.resetForm();
  }

  private resetForm() {
    this.appForm.reset();
    Object.keys(this.appForm.controls).forEach((name) =>
      this.appForm.controls[name].setErrors(null)
    );
    this.isEditing = false;
  }
}
