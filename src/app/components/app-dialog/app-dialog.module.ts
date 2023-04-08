import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDialogComponent } from './app-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [AppDialogComponent],
  imports: [CommonModule, MatDialogModule],
  exports: [AppDialogComponent],
})
export class AppDialogModule {}
