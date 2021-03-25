// Angular
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Input,
  OnInit
} from '@angular/core';

// Project
import { NgxButtonForm } from '../../interfaces/ngx-button-form';
import { NgxButtonSize } from '../../interfaces/ngx-button-size';
import { NgxButtonType } from '../../interfaces/ngx-button-type';
import { NgxButtonColor } from '../../interfaces/ngx-button-color';
import { NgxButtonHoverType } from '../../interfaces/ngx-button-hover-type';



@Component({
  selector: 'button[ngx-button], a[ngx-button], input[type="button"][ngx-button], input[type="submit"][ngx-button]',
  templateUrl: './ngx-button.component.html',
  styleUrls: ['./ngx-button.component.scss'],
  host: {
    'class': 'ngx-button',

    '[class.ngx-button-small]': `ngxButtonSize === 'small'`,
    '[class.ngx-button-normal]': `ngxButtonSize === 'normal'`,
    '[class.ngx-button-large]': `ngxButtonSize === 'large'`,

    '[class.ngx-button-type-basic]': `ngxButtonType === 'basic'`,
    '[class.ngx-button-type-line]': `ngxButtonType === 'line'`,
    '[class.ngx-button-type-flat]': `ngxButtonType === 'flat'`,
    '[class.ngx-button-type-raised]': `ngxButtonType === 'raised'`,

    '[style.background-color]': 'getBackgroundColor()',
    '[style.border-radius]': 'getBorderRadius()',
    '[style.border-color]': 'getBorderColor()',
    '[style.box-shadow]': 'getBoxShadow()',
    '[style.color]': 'getColor()',

    '[attr.disabled]': 'disabled || null',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxButtonComponent implements OnInit {

  hover: boolean = false;
  focus: boolean = false;

  @Input('ngx-button') ngxButton: string = '';
  @Input('ngx-button-color') ngxButtonColor: NgxButtonColor = 'basic';
  @Input('ngx-button-form') ngxButtonForm: NgxButtonForm = 'basic';
  @Input('ngx-button-size') ngxButtonSize: NgxButtonSize = 'normal';
  @Input('ngx-button-type') ngxButtonType: NgxButtonType = 'basic';
  @Input('ngx-button-hover-type') ngxButtonHoverType: NgxButtonHoverType = 'standard';
  @Input() disabled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('mouseenter', ['$event']) onMouseEnter ($event) {
    this.hover = true;
  }

  @HostListener('mouseleave', ['$event']) onMouseLeave ($event) {
    this.hover = false;
  }

  @HostListener('focus', ['$event']) onFocus ($event) {
    this.focus = true;
  }

  @HostListener('blur', ['$event']) onBlur ($event) {
    this.focus = false;
  }

  public getBackgroundColor() {
    if (this.ngxButtonType === 'basic') {
      if (this.hover && this.ngxButtonHoverType === 'invert') return this.getButtonColor();
      return 'transparent';
    }
    if (this.ngxButtonType === 'line') {
      if (this.hover && this.ngxButtonHoverType === 'invert') return this.getButtonColor();
      return 'transparent';
    }
    if (this.disabled) {
      return this.getButtonColorDisabled();
    }
    if (this.hover) {
      return this.getButtonColorHover();
    }
    return this.getButtonColor()
  }

  public getBorderRadius() {
    return this.ngxButtonForm === 'basic' ? '5px' : this.ngxButtonForm === 'round' ? '50px' : '0';
  }

  public getBorderColor() {
    if (this.disabled) {
      if (this.ngxButtonType === 'line') {
        return this.getButtonColorDisabled();
      }
    }
    if (this.ngxButtonType === 'line') {
      return this.getButtonColor();
    }
    return 'transparent';
  }

  public getBoxShadow() {
    if (this.focus) {
      return `var(--${this.ngxButtonColor}-shadow)`;
      // if (this.ngxButtonType === 'line') return this.getButtonColorDisabled();
    }
  }

  public getColor() {
    if (this.disabled) {
      if (this.ngxButtonType === 'basic') return this.getButtonColorDisabled();
      if (this.ngxButtonType === 'line') return this.getButtonColorDisabled();
    }
    if (this.hover) {
      if (this.ngxButtonType === 'basic' && this.ngxButtonHoverType === 'invert') return `#fff`;
      if (this.ngxButtonType === 'line' && this.ngxButtonHoverType === 'invert') return `#fff`;
    }
    if (this.ngxButtonType === 'basic') return this.getButtonColor();
    if (this.ngxButtonType === 'line') return this.getButtonColor();
    return '#fff';
  }

  private getButtonColor(): string {
    if (this.getCustomProperty()) return `var(-${this.getCustomProperty()}-${this.ngxButtonColor})`;
    return `var(--${this.ngxButtonColor})`;
  }

  private getButtonColorHover(): string {
    if (this.getCustomProperty()) return `var(-${this.getCustomProperty()}-${this.ngxButtonColor}-hover)`;
    return `var(--${this.ngxButtonColor}-hover)`;
  }

  private getButtonColorDisabled(): string {
    if (this.getCustomProperty()) return `var(-${this.getCustomProperty()}-${this.ngxButtonColor}-disabled, var(-${this.getCustomProperty()}-disabled-defoult))`;
    return `var(--${this.ngxButtonColor}-disabled, var(--disabled-defoult))`;
  }

  private getCustomProperty(): string {
    if (this.ngxButton && this.ngxButton.length) return `-${this.ngxButton}`;
    return null;
  }

}
