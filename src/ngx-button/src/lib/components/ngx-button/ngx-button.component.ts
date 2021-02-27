// Angular
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit
} from '@angular/core';



type NgxButtonColor = 'basic' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
type NgxButtonForm = 'basic' | 'round' | 'square';
type NgxButtonSize = 'small' | 'normal' | 'large';
type NgxButtonType = 'basic' | 'line' | 'flat' | 'raised';



@Component({
  selector: 'button[ngx-button], a[ngx-button]',
  templateUrl: './ngx-button.component.html',
  styleUrls: ['./ngx-button.component.scss'],
  host: {
    'class': 'ngx-button',

    '[class.ngx-button-small]': 'ngxButtonSize === "small"',
    '[class.ngx-button-normal]': 'ngxButtonSize === "normal"',
    '[class.ngx-button-large]': 'ngxButtonSize === "large"',

    '[class.ngx-button-type-basic]': 'ngxButtonType === "basic"',
    '[class.ngx-button-type-line]': 'ngxButtonType === "line"',
    '[class.ngx-button-type-flat]': 'ngxButtonType === "flat"',
    '[class.ngx-button-type-raised]': 'ngxButtonType === "raised"',

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

  readonly STANDARD_COLORS: Array<NgxButtonColor> = [
    'basic',
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
  ]

  readonly STANDARD_FORMS: Array<NgxButtonForm> = [
    'basic',
    'round',
    'square',
  ]

  readonly STANDARD_SIZES: Array<NgxButtonSize> = [
    'small',
    'normal',
    'large',
  ]

  readonly STANDARD_TYPES: Array<NgxButtonType> = [
    'basic',
    'line',
    'flat',
    'raised',
  ]

  @Input() ngxButtonColor: NgxButtonColor = 'basic'
  @Input() ngxButtonForm: NgxButtonForm = 'basic';
  @Input() ngxButtonSize: NgxButtonSize = 'normal';
  @Input() ngxButtonType: NgxButtonType = 'basic';
  @Input() disabled: boolean = false;

  constructor(
    private elementRef: ElementRef,
  ) { }

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

  private getBackgroundColor() {
    if (this.ngxButtonType === 'basic') return 'transparent';
    if (this.ngxButtonType === 'line') return 'transparent';
    if (this.disabled) {
      return `var(--${this.ngxButtonColor}-disabled, var(--button-disabled-defoult))`;
    }
    if (this.hover) {
      return `var(--${this.ngxButtonColor}-hover)`;
    }
    return `var(--${this.ngxButtonColor})`
  }

  private getBorderRadius() {
    return this.ngxButtonForm === 'basic' ? '5px' : this.ngxButtonForm === 'round' ? '50px' : '0';
  }

  getBorderColor() {
    if (this.disabled) {
      if (this.ngxButtonType === 'line') {
        return `var(--${this.ngxButtonColor}-disabled, var(--button-disabled-defoult))`;
      }
    }
    if (this.ngxButtonType === 'line') return `var(--${this.ngxButtonColor})`;
    return 'transparent';
  }

  getBoxShadow() {
    if (this.focus) {
      return `var(--${this.ngxButtonColor}-shadow)`;
      // if (this.ngxButtonType === 'line') return `var(--${this.ngxButtonColor}-disabled, var(--button-disabled-defoult))`;
    }
  }

  getColor() {
    if (this.disabled) {
      if (this.ngxButtonType === 'basic') return `var(--${this.ngxButtonColor}-disabled, var(--button-disabled-defoult))`;
      if (this.ngxButtonType === 'line') return `var(--${this.ngxButtonColor}-disabled, var(--button-disabled-defoult))`;
    }
    if (this.ngxButtonType === 'basic') return `var(--${this.ngxButtonColor})`;
    if (this.ngxButtonType === 'line') return `var(--${this.ngxButtonColor})`;
    return '#fff';
  }

  private getHostElement(): HTMLElement {
    return this.elementRef.nativeElement;
  }

  private hasHostAttributes(...attributes: string[]): boolean {
    return attributes.some(attribute => this.getHostElement().hasAttribute(attribute));
  }

}
