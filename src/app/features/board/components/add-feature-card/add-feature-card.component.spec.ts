import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFeatureCardComponent } from './add-feature-card.component';

describe('AddFeatureCardComponent', () => {
  let component: AddFeatureCardComponent;
  let fixture: ComponentFixture<AddFeatureCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFeatureCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFeatureCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
