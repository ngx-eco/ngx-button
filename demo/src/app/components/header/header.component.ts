// Angular
import { Component, OnInit } from '@angular/core';

// App
import { DemoService } from '../../services/demo/demo.service';



@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public demo: DemoService,
  ) { }

  ngOnInit(): void {
  }

}
