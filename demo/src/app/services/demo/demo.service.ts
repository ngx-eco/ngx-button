// Angular
import { Injectable } from '@angular/core';

// Project
import {
  NgxButtonType,
  NgxButtonForm,
  NgxButtonSize
} from '@ngx-eco/ngx-button';



@Injectable({
  providedIn: 'root'
})
export class DemoService {

  public type: NgxButtonType = 'basic';
  public size: NgxButtonSize = 'normal';
  public form: NgxButtonForm = 'basic';
  public custom: boolean;

  constructor() { }
}
