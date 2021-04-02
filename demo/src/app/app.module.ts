// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Libs
import { NgxThemesModule } from '@ngx-eco/ngx-themes';

// App
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Services
import { DemoService } from './services/demo/demo.service';

// Configs
import { NgxThemesConfig } from './core/configs/ngx-themes/ngx-themes.config';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxThemesModule.forRoot(NgxThemesConfig)
  ],
  providers: [
    DemoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
