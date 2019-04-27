import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaSituationComponent } from './area-situation.component';

describe('AreaSituationComponent', () => {
  let component: AreaSituationComponent;
  let fixture: ComponentFixture<AreaSituationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaSituationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaSituationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
