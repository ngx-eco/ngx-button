// Angular
import { Injectable } from '@angular/core';

// Project
import {
  NgxButtonType,
  NgxButtonForm,
  NgxButtonSize,
  NgxButtonHoverType,
  NgxButtonTextColor,
} from '@ngx-eco/ngx-button';



@Injectable({
  providedIn: 'root'
})
export class DemoService {

  public type: NgxButtonType = 'flat';
  public size: NgxButtonSize = 'normal';
  public form: NgxButtonForm = 'basic';
  public hover: NgxButtonHoverType = 'standard';
  public text: NgxButtonTextColor = 'invert';
  public custom: string = '';

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

  public toggleHoverType() {
    switch (this.hover) {
      case 'standard':
        this.hover = 'invert';
        break;
      case 'invert':
        this.hover = 'standard';
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

  public toggleText() {
    switch (this.text) {
      case 'standard':
        this.text = 'invert';
        break;
      case 'invert':
        this.text = 'standard';
        break;
      default:
        break;
    }
  }

}
