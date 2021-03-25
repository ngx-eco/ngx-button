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

  public type: NgxButtonType = 'flat';
  public size: NgxButtonSize = 'normal';
  public form: NgxButtonForm = 'basic';
  public custom: string = 'custom';

  constructor() { }

  public toggleType() {
    switch (this.type) {
      case 'basic':
        this.type = 'flat';
        break;
      case 'flat':
        this.type = 'line';
        break;
      case 'line':
        this.type = 'raised';
        break;
      case 'raised':
        this.type = 'basic';
        break;
      default:
        break;
    }
  }

  public toggleSize() {
    switch (this.size) {
      case 'normal':
        this.size = 'large';
        break;
      case 'large':
        this.size = 'small';
        break;
      case 'small':
        this.size = 'normal';
        break;
      default:
        break;
    }
  }

  public toggleForm() {
    switch (this.form) {
      case 'basic':
        this.form = 'round';
        break;
      case 'round':
        this.form = 'square';
        break;
      case 'square':
        this.form = 'basic';
        break;
      default:
        break;
    }
  }

  public toggleCustom() {
    switch (this.custom) {
      case 'custom':
        this.custom = '';
        break;
      case '':
        this.custom = 'custom';
        break;
      default:
        break;
    }
  }

}
