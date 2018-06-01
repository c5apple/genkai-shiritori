import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassButtonComponent } from './pass-button.component';

describe('PassButtonComponent', () => {
  let component: PassButtonComponent;
  let fixture: ComponentFixture<PassButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
