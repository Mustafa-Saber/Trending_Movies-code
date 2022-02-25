import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallPlansComponent } from './small-plans.component';

describe('SmallPlansComponent', () => {
  let component: SmallPlansComponent;
  let fixture: ComponentFixture<SmallPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallPlansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
