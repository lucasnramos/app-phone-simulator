import { Injectable } from '@angular/core';
import { BehaviorSubject, delay } from 'rxjs';
import { mockApps } from '../mocks/apps.mock';
import { App } from '../models/app.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private appList$: BehaviorSubject<Array<App>>;
  private editingApp$!: BehaviorSubject<App>;

  constructor() {
    this.appList$ = new BehaviorSubject(mockApps);
    this.editingApp$ = new BehaviorSubject({} as App);
  }

  /**
   * Using delay operator to simulate an API fetch,
   * this should allow for the loading indicator to show on screen
   */
  get apps() {
    return this.appList$.pipe(delay(Math.random() * 2000));
  }

  get editingApp() {
    return this.editingApp$.asObservable();
  }

  addApp(app: App) {
    const apps = this.appList$.getValue();
    apps.unshift(app);
    this.appList$.next(apps);
  }

  updateApp(app: App) {
    const currentApps = this.appList$.getValue();
    const editingApp = this.editingApp$.getValue();
    const indexToUpdate = currentApps.findIndex(
      (app) => app.appName === editingApp.appName
    );
    currentApps.splice(indexToUpdate, 1, app);
    this.appList$.next(currentApps);
  }

  setEditingApp(app: App) {
    const isEditingAppInitialized = !!this.editingApp$?.getValue();
    if (isEditingAppInitialized) {
      this.editingApp$.next(app);
    } else {
      this.editingApp$ = new BehaviorSubject(app);
    }
  }
}
