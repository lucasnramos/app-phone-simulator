import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CardModule } from "./components/card/card.module";
import { LoadingIndicatorModule } from "./components/loading-indicator/loading-indicator.module";
import { MatPaginatorModule } from "@angular/material/paginator";
import { AppFormModule } from "./components/app-form/app-form.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    // Angular modules
    BrowserModule,
    BrowserAnimationsModule,
    // Material
    MatPaginatorModule,
    // Internal Modules
    CardModule,
    LoadingIndicatorModule,
    AppFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
