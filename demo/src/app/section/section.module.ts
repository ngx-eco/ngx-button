// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// App
import { SectionComponent } from './section.component';



@NgModule({
  declarations: [
    SectionComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SectionComponent,
  ],
})
export class SectionModule { }
