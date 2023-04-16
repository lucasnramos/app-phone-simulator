import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';

import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AppDialogModule } from '../app-dialog/app-dialog.module';

@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    AppDialogModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [CardComponent],
})
export class CardModule {}
