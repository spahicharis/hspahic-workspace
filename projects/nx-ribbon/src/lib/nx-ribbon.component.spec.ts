import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NxRibbonComponent } from './nx-ribbon.component';

describe('NxRibbonComponent', () => {
  let component: NxRibbonComponent;
  let fixture: ComponentFixture<NxRibbonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NxRibbonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NxRibbonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
