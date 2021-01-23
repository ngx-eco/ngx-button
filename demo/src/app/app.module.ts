// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Project
import { NgxButtonModule } from '@ngx-eco/ngx-button';

// App
import { AppComponent } from './app.component';
import { SectionComponent } from './section/section.component';



@NgModule({
  declarations: [
    AppComponent,
    SectionComponent,
  ],
  imports: [
    BrowserModule,
    NgxButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
