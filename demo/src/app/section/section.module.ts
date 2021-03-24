// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// App
import { SectionComponent } from './section.component';

// Project
import { NgxButtonModule } from '@ngx-eco/ngx-button';



@NgModule({
  declarations: [
    SectionComponent,
  ],
  imports: [
    CommonModule,
    NgxButtonModule
  ],
  exports: [
    SectionComponent,
  ],
})
export class SectionModule { }
