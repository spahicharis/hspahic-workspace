import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NxPredictiveInputComponent } from './nx-predictive-input.component';

describe('NxPredictiveInputComponent', () => {
  let component: NxPredictiveInputComponent;
  let fixture: ComponentFixture<NxPredictiveInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NxPredictiveInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NxPredictiveInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
