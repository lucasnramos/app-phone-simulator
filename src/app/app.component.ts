import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { App } from './models/app.model';
import { AppService } from './services/app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  appList$: Observable<Array<App>>;
  isLoading = true;

  constructor(private appService: AppService) {
    this.appList$ = this.appService.apps;
  }

  ngOnInit(): void {
    this.appList$.pipe(take(1)).subscribe(() => (this.isLoading = false));
  }
}
