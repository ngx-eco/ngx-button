// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// App
import { MainPageComponent } from './main-page.component';



@NgModule({
  declarations: [
    MainPageComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MainPageComponent,
  ],
})
export class MainPageModule { }
