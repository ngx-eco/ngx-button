// Angular
import { Component, OnInit } from '@angular/core';

// App
import { DemoService } from '../../services/demo/demo.service';



@Component({
  selector: 'section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  constructor(
    public demo: DemoService,
  ) { }

  ngOnInit(): void {
  }

  click() {
    console.log('click');
  }

}
