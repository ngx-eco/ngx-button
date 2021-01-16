// Angular
import { AfterContentInit, ChangeDetectionStrategy, Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';



type NgxButtonColor = 'basic' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
type NgxButtonForm = 'basic' | 'round' | 'square';



@Component({
  selector: 'button[ngx-button], a[ngx-button]',
  templateUrl: './ngx-button.component.html',
  styleUrls: ['./ngx-button.component.scss'],
  host: {
    '[attr.disabled]': 'disabled || null',
    'class': 'ngx-button',
    '[style.background-color]': 'getBackgroundColor()',
    '[style.border-radius]': 'getBorderRadius()',
    '[attr.tabindex]': 'getTabIndex()',
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

  @Input() buttonColor: NgxButtonColor = 'basic';
  @Input() buttonForm: NgxButtonForm = 'basic';
  @Input() disabled;

  constructor(
    private elementRef: ElementRef,
  ) { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    for (const color of this.STANDARD_COLORS) {
      if (this.hasHostAttributes(color)) this.buttonColor = color;
    }
    for (const form of this.STANDARD_FORMS) {
      if (this.hasHostAttributes(form)) this.buttonForm = form;
    }
  }

  @HostListener('mouseenter', ['$event']) onMouseEnter ($event) {
    this.hover = true;
  }

  @HostListener('mouseleave', ['$event']) onMouseLeave ($event) {
    this.hover = false;
  }

  private getBackgroundColor() {
    if (this.isDisabled()) return `var(--${this.buttonColor}-disabled, var(--button-disabled-defoult))`
    else return this.hover ? `var(--${this.buttonColor}-hover)` : `var(--${this.buttonColor})`;
  }

  private getBorderRadius() {
    return this.buttonForm === 'basic' ? '3px' : this.buttonForm === 'round' ? '50px' : '0';
  }

  private isDisabled(): boolean {
    return this.hasHostAttributes('disabled', 'ng-reflect-disabled');
  }

  private getTabIndex() {
    return this.isDisabled() ? -1 : 0;
  }

  private getHostElement(): HTMLElement {
    return this.elementRef.nativeElement;
  }

  private hasHostAttributes(...attributes: string[]): boolean {
    return attributes.some(attribute => this.getHostElement().hasAttribute(attribute));
  }

}
