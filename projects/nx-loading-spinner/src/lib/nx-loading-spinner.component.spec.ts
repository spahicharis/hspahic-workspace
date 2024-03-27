import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NxLoadingSpinnerComponent } from './nx-loading-spinner.component';

describe('NxLoadingSpinnerComponent', () => {
  let component: NxLoadingSpinnerComponent;
  let fixture: ComponentFixture<NxLoadingSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NxLoadingSpinnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NxLoadingSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
