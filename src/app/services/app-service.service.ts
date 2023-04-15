import { Injectable } from '@angular/core';
import { BehaviorSubject, delay } from 'rxjs';
import { mockApps } from '../mocks/apps.mock';
import { App } from '../models/app.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private _apps: BehaviorSubject<Array<App>>;

  constructor() {
    this._apps = new BehaviorSubject(mockApps);
  }

  /**
   * Using delay operator to simulate an API fetch,
   * this should allow for the loading indicator to show on screen
   */
  get apps() {
    return this._apps.pipe(delay(Math.random() * 2000));
  }

  addApp(app: App) {
    const apps = this._apps.getValue();
    apps.unshift(app);
    this._apps.next(apps);
  }
}
