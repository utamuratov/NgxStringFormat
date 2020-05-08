import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxStringFormatComponent } from './ngx-string-format.component';

describe('NgxStringFormatComponent', () => {
  let component: NgxStringFormatComponent;
  let fixture: ComponentFixture<NgxStringFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxStringFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxStringFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
