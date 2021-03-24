// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// App
import { HeaderComponent } from './header.component';

// Project
import { NgxButtonModule } from '@ngx-eco/ngx-button';



@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    NgxButtonModule,
  ],
  exports: [
    HeaderComponent,
  ],
})
export class HeaderModule { }
