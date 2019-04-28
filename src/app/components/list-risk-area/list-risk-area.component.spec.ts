import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRiskAreaComponent } from './list-risk-area.component';

describe('ListRiskAreaComponent', () => {
  let component: ListRiskAreaComponent;
  let fixture: ComponentFixture<ListRiskAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRiskAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRiskAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
