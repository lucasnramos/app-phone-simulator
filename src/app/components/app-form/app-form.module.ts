import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFormComponent } from './app-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AppFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // Material
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [AppFormComponent],
})
export class AppFormModule {}
