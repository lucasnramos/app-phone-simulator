import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDialogComponent } from './app-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AppDialogComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  exports: [AppDialogComponent],
})
export class AppDialogModule {}
