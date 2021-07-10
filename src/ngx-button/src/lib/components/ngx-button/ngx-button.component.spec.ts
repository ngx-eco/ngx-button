// Angular
import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Libs
import { NgxThemesModule } from '@ngx-eco/ngx-themes';

// App
import { NgxThemesConfig } from 'demo/src/app/core/configs/ngx-themes/ngx-themes.config';

// Project
import { NgxButtonModule } from '../../ngx-button.module';
import { NgxButtonComponent } from './ngx-button.component';
import { NgxButtonType } from '../../interfaces/ngx-button-type';
import { NgxButtonForm } from '../../interfaces/ngx-button-form';
import { NgxButtonSize } from '../../interfaces/ngx-button-size';
import { NgxButtonColor } from '../../interfaces/ngx-button-color';
import { NgxButtonTextColor } from '../../interfaces/ngx-button-text-color';
import { NgxButtonHoverType } from '../../interfaces/ngx-button-hover-type';



describe('NgxButtonComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TestApp,
      ],
      imports: [
        NgxButtonModule,
        NgxThemesModule.forRoot(NgxThemesConfig),
      ],
    })
    .compileComponents();
  });

  it('should create', () => {
    let fixture: ComponentFixture<TestApp> = TestBed.createComponent(TestApp);
    let buttonComponent: DebugElement = fixture.debugElement.query(By.css('button'));
    expect(buttonComponent).toBeTruthy();
  });

  it('all selectors work', () => {
    let fixture: ComponentFixture<TestApp> = TestBed.createComponent(TestApp);
    let buttonComponent: DebugElement = fixture.debugElement.query(By.css('button'));
    let linkComponent: DebugElement = fixture.debugElement.query(By.css('a'));
    let inputComponent: DebugElement = fixture.debugElement.query(By.css('input[type="button"]'));
    let submitComponent: DebugElement = fixture.debugElement.query(By.css('input[type="submit"]'));
    expect(buttonComponent).toBeTruthy();
    expect(linkComponent).toBeTruthy();
    expect(inputComponent).toBeTruthy();
    expect(submitComponent).toBeTruthy();
  });

  it('init variables', () => {
    let fixture: ComponentFixture<TestApp> = TestBed.createComponent(TestApp);
    let buttonComponent: NgxButtonComponent = fixture.debugElement.query(By.css('button')).componentInstance;
    expect(buttonComponent.ngxButton).toBe('');
    expect(buttonComponent.ngxButtonColor).toBe('basic');
    expect(buttonComponent.ngxButtonTextColor).toBe('standard');
    expect(buttonComponent.ngxButtonForm).toBe('basic');
    expect(buttonComponent.ngxButtonSize).toBe('normal');
    expect(buttonComponent.ngxButtonType).toBe('basic');
    expect(buttonComponent.ngxButtonHoverType).toBe('invert');
    expect(buttonComponent.disabled).toBe(false);
  });

  it('test color', () => {
    let fixture: ComponentFixture<TestApp> = TestBed.createComponent(TestApp);
    let testComponent: TestApp = fixture.debugElement.componentInstance;
    let buttonComponent: HTMLElement = fixture.debugElement.query(By.css('button')).nativeElement;
    fixture.detectChanges();
    testComponent.type = 'flat';
    testComponent.color = 'primary';
    fixture.detectChanges();
    expect(buttonComponent.style.backgroundColor).toBe('var(--primary)');
    testComponent.color = 'basic';
    fixture.detectChanges();
    expect(buttonComponent.style.backgroundColor).toBe('var(--basic)');
    testComponent.color = 'secondary';
    fixture.detectChanges();
    expect(buttonComponent.style.backgroundColor).toBe('var(--secondary)');
    testComponent.color = 'help';
    fixture.detectChanges();
    expect(buttonComponent.style.backgroundColor).toBe('var(--help)');
    testComponent.color = 'success';
    fixture.detectChanges();
    expect(buttonComponent.style.backgroundColor).toBe('var(--success)');
    testComponent.color = 'wait';
    fixture.detectChanges();
    expect(buttonComponent.style.backgroundColor).toBe('var(--wait)');
    testComponent.color = 'accept';
    fixture.detectChanges();
    expect(buttonComponent.style.backgroundColor).toBe('var(--accept)');
    testComponent.color = 'info';
    fixture.detectChanges();
    expect(buttonComponent.style.backgroundColor).toBe('var(--info)');
    testComponent.color = 'warn';
    fixture.detectChanges();
    expect(buttonComponent.style.backgroundColor).toBe('var(--warn)');
    testComponent.color = 'danger';
    fixture.detectChanges();
    expect(buttonComponent.style.backgroundColor).toBe('var(--danger)');
    testComponent.color = 'error';
    fixture.detectChanges();
    expect(buttonComponent.style.backgroundColor).toBe('var(--error)');
  });

  it('test form', () => {
    let fixture: ComponentFixture<TestApp> = TestBed.createComponent(TestApp);
    let testComponent: TestApp = fixture.debugElement.componentInstance;
    let buttonComponent: HTMLElement = fixture.debugElement.query(By.css('button')).nativeElement;
    fixture.detectChanges();
    testComponent.form = 'square';
    fixture.detectChanges();
    expect(buttonComponent.style.borderRadius).toBe('0px');
    testComponent.form = 'round';
    fixture.detectChanges();
    expect(buttonComponent.style.borderRadius).toBe('50px');
    testComponent.form = 'basic';
    fixture.detectChanges();
    expect(buttonComponent.style.borderRadius).toBe('5px');
  });

  it('test size', () => {
    let fixture: ComponentFixture<TestApp> = TestBed.createComponent(TestApp);
    let testComponent: TestApp = fixture.debugElement.componentInstance;
    let buttonComponent: HTMLElement = fixture.debugElement.query(By.css('button')).nativeElement;
    fixture.detectChanges();
    testComponent.size = 'large';
    fixture.detectChanges();
    expect(buttonComponent.classList).toContain('ngx-button-large');
    expect(buttonComponent.classList).not.toContain('ngx-button-normal');
    expect(buttonComponent.classList).not.toContain('ngx-button-small');
    testComponent.size = 'normal';
    fixture.detectChanges();
    expect(buttonComponent.classList).toContain('ngx-button-normal');
    expect(buttonComponent.classList).not.toContain('ngx-button-large');
    expect(buttonComponent.classList).not.toContain('ngx-button-small');
    testComponent.size = 'small';
    fixture.detectChanges();
    expect(buttonComponent.classList).toContain('ngx-button-small');
    expect(buttonComponent.classList).not.toContain('ngx-button-large');
    expect(buttonComponent.classList).not.toContain('ngx-button-normal');
  });

  it('test type', () => {
    let fixture: ComponentFixture<TestApp> = TestBed.createComponent(TestApp);
    let testComponent: TestApp = fixture.debugElement.componentInstance;
    let buttonComponent: HTMLElement = fixture.debugElement.query(By.css('button')).nativeElement;
    fixture.detectChanges();
    testComponent.type = 'flat';
    fixture.detectChanges();
    expect(buttonComponent.classList).toContain('ngx-button-type-flat');
    expect(buttonComponent.classList).not.toContain('ngx-button-type-basic');
    expect(buttonComponent.classList).not.toContain('ngx-button-type-line');
    expect(buttonComponent.classList).not.toContain('ngx-button-type-raised');
    testComponent.type = 'basic';
    fixture.detectChanges();
    expect(buttonComponent.classList).toContain('ngx-button-type-basic');
    expect(buttonComponent.classList).not.toContain('ngx-button-type-flat');
    expect(buttonComponent.classList).not.toContain('ngx-button-type-line');
    expect(buttonComponent.classList).not.toContain('ngx-button-type-raised');
    testComponent.type = 'line';
    fixture.detectChanges();
    expect(buttonComponent.classList).toContain('ngx-button-type-line');
    expect(buttonComponent.classList).not.toContain('ngx-button-type-basic');
    expect(buttonComponent.classList).not.toContain('ngx-button-type-flat');
    expect(buttonComponent.classList).not.toContain('ngx-button-type-raised');
    testComponent.type = 'raised';
    fixture.detectChanges();
    expect(buttonComponent.classList).toContain('ngx-button-type-raised');
    expect(buttonComponent.classList).not.toContain('ngx-button-type-line');
    expect(buttonComponent.classList).not.toContain('ngx-button-type-basic');
    expect(buttonComponent.classList).not.toContain('ngx-button-type-flat');
  });

});



/** Test component that contains an MatButton. */
@Component({
  selector: 'test-app',
  template: `
    <button
      type="button"
      (click)="click()"
      [ngx-button]="custom"
      [disabled]="disabled"
      [ngx-button-type]="type"
      [ngx-button-size]="size"
      [ngx-button-form]="form"
      [ngx-button-color]="color"
      [ngx-button-text-color]="text"
      [ngx-button-hover-type]="hover"> Button
    </button>
    <a
      [ngx-button]="custom"
      [disabled]="disabled"
      [ngx-button-type]="type"
      [ngx-button-size]="size"
      [ngx-button-form]="form"
      href="http://fil0157.ru"
      [ngx-button-color]="color"
      [ngx-button-text-color]="text"
      [ngx-button-hover-type]="hover"> Link
    </a>
    <input
      type="button"
      value="Input"
      (click)="click()"
      [ngx-button]="custom"
      [disabled]="disabled"
      [ngx-button-type]="type"
      [ngx-button-size]="size"
      [ngx-button-form]="form"
      [ngx-button-color]="color"
      [ngx-button-text-color]="text"
      [ngx-button-hover-type]="hover">
    <input
      type="submit"
      value="Submit"
      (click)="click()"
      [ngx-button]="custom"
      [disabled]="disabled"
      [ngx-button-type]="type"
      [ngx-button-size]="size"
      [ngx-button-form]="form"
      [ngx-button-color]="color"
      [ngx-button-text-color]="text"
      [ngx-button-hover-type]="hover">
  `
})
class TestApp {
  public color: NgxButtonColor = 'basic';
  public type: NgxButtonType = 'basic';
  public size: NgxButtonSize = 'normal';
  public form: NgxButtonForm = 'basic';

  public hover: NgxButtonHoverType = 'invert';
  public text: NgxButtonTextColor = 'standard';

  public disabled: boolean = false;
  public custom: string = null;

  public clickCount: number = 0;

  public click(): void {
    this.clickCount++;
  }
}
