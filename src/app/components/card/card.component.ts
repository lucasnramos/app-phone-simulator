import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { App } from 'src/app/models/app.model';
import { AppDialogComponent } from '../app-dialog/app-dialog.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input()
  app: App = {} as App;

  constructor(private dialog: MatDialog) {}

  onClick() {
    this.openDialog();
  }

  private openDialog(): void {
    const dialogRef = this.dialog.open(AppDialogComponent, {
      data: { appVersion: this.app.appVersion, appName: this.app.appName },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
  }
}
