import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from './components/card/card.module';
import { LoadingIndicatorModule } from './components/loading-indicator/loading-indicator.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CardModule,
    LoadingIndicatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
