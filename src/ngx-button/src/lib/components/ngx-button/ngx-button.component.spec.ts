// Angular
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Project
import { NgxButtonComponent } from './ngx-button.component';



describe('NgxButtonComponent', () => {
  let component: NgxButtonComponent;
  let fixture: ComponentFixture<NgxButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
