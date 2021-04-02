// Angular
import { Component, OnInit } from '@angular/core';

// Libs
import { NgxThemesService } from '@ngx-eco/ngx-themes';



@Component({
  selector: 'root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private themes: NgxThemesService,
  ) { }

  ngOnInit(): void {
  }

}
