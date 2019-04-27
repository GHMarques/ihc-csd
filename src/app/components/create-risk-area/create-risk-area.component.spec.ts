import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRiskAreaComponent } from './create-risk-area.component';

describe('CreateRiskAreaComponent', () => {
  let component: CreateRiskAreaComponent;
  let fixture: ComponentFixture<CreateRiskAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRiskAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRiskAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
