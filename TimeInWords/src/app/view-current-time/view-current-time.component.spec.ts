import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCurrentTimeComponent } from './view-current-time.component';

describe('ViewCurrentTimeComponent', () => {
  let component: ViewCurrentTimeComponent;
  let fixture: ComponentFixture<ViewCurrentTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCurrentTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCurrentTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
