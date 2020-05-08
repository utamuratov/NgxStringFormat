import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxStringFormatModule } from 'ngx-string-format';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxStringFormatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
