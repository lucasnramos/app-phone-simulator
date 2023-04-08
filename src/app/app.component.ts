import { Component } from '@angular/core';
import { App } from './models/app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  app: App = {
    appName: 'This is my first app',
    appVersion: '7.0',
    appContact: 'This is the app contact information',
  };
}
