// Angular
import { AfterContentInit, ChangeDetectionStrategy, Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';



type NgxButtonColor = 'basic' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
type NgxButtonForm = 'basic' | 'round' | 'square';
type NgxButtonSize = 'small' | 'normal' | 'large';



@Component({
  selector: 'button[ngx-button], a[ngx-button]',
  templateUrl: './ngx-button.component.html',
  styleUrls: ['./ngx-button.component.scss'],
  host: {
    'class': 'ngx-button',
    '[class.ngx-button-small]': 'ngxButtonSize === "small"',
    '[class.ngx-button-normal]': 'ngxButtonSize === "normal"',
    '[class.ngx-button-large]': 'ngxButtonSize === "large"',
    '[style.background-color]': 'getBackgroundColor()',
    '[style.border-radius]': 'getBorderRadius()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxButtonComponent implements OnInit, AfterContentInit {

  hover: boolean = false;

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

  @Input() ngxButtonColor: NgxButtonColor = 'basic'
  @Input() ngxButtonForm: NgxButtonForm = 'basic';
  @Input() ngxButtonSize: NgxButtonSize = 'normal';
  @Input() disabled: boolean = false;

  constructor(
    private elementRef: ElementRef,
  ) { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    // for (const color of this.STANDARD_COLORS) {
    //   if (this.hasHostAttributes(color)) this.buttonColor = color;
    // }
    // for (const form of this.STANDARD_FORMS) {
    //   if (this.hasHostAttributes(form)) this.buttonForm = form;
    // }
  }

  @HostListener('mouseenter', ['$event']) onMouseEnter ($event) {
    this.hover = true;
  }

  @HostListener('mouseleave', ['$event']) onMouseLeave ($event) {
    this.hover = false;
  }

  private getBackgroundColor() {
    if (this.disabled) return `var(--${this.ngxButtonColor}-disabled, var(--button-disabled-defoult))`
    else return this.hover ? `var(--${this.ngxButtonColor}-hover)` : `var(--${this.ngxButtonColor})`;
  }

  private getBorderRadius() {
    return this.ngxButtonForm === 'basic' ? '5px' : this.ngxButtonForm === 'round' ? '50px' : '0';
  }

  private getHostElement(): HTMLElement {
    return this.elementRef.nativeElement;
  }

  private hasHostAttributes(...attributes: string[]): boolean {
    return attributes.some(attribute => this.getHostElement().hasAttribute(attribute));
  }

}
