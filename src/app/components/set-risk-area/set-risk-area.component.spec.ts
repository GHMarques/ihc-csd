import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetRiskAreaComponent } from './set-risk-area.component';

describe('SetRiskAreaComponent', () => {
  let component: SetRiskAreaComponent;
  let fixture: ComponentFixture<SetRiskAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetRiskAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetRiskAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
