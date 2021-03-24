// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// App
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DemoService } from './services/demo/demo.service';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    DemoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
