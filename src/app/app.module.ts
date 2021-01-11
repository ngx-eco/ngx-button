// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Project
import { NgxButtonModule } from '@fil0157/ngx-button';

// App
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxButtonModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
