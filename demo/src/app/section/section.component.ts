// Angular
import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'section',
  templateUrl: './section.component.pug',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  @Input() size
  @Input() form
  @Input() type

  constructor() { }

  ngOnInit(): void {
  }

  click() {
    console.log('click');
  }

}
