import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs';
import { App } from 'src/app/models/app.model';
import { AppService } from 'src/app/services/app-service.service';
import { AppDialogComponent } from '../app-dialog/app-dialog.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input()
  app: App = {} as App;

  constructor(private dialog: MatDialog, private appService: AppService) {}

  onClick() {
    this.openDialog();
  }

  private openDialog(): void {
    const dialogRef = this.dialog.open(AppDialogComponent, {
      data: { ...this.app },
    });

    dialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe((result) => {
        if (result) {
          this.appService.setEditingApp(result);
        }
      });
  }
}
