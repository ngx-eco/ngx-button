// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// App
import { MainPageComponent } from './main-page.component';
import { SectionModule } from '../../section/section.module';
import { MainPageRoutingModule } from './main-page-routing.module';
import { HeaderModule } from '../../components/header/header.module';



@NgModule({
  declarations: [
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule,
    SectionModule,
    MainPageRoutingModule,
  ],
})
export class MainPageModule { }
