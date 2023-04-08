import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';

import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule,  MatCardModule, MatDialogModule],
  exports: [CardComponent]
})
export class CardModule {}
