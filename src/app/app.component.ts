import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { App } from './models/app.model';
import { AppService } from './services/app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  appList$: Observable<Array<App>>;

  constructor(private appService: AppService) {
    this.appList$ = this.appService.apps;
  }
}
