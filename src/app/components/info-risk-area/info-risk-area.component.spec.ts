import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRiskAreaComponent } from './info-risk-area.component';

describe('InfoRiskAreaComponent', () => {
  let component: InfoRiskAreaComponent;
  let fixture: ComponentFixture<InfoRiskAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoRiskAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoRiskAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
