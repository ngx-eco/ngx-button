// Angular
import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  @Input() size
  @Input() form

  constructor() { }

  ngOnInit(): void {
  }

  click() {
    console.log('click');
  }

}
