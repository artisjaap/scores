import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnookerLandingComponent } from './snooker-landing.component';

describe('SnookerLandingComponent', () => {
  let component: SnookerLandingComponent;
  let fixture: ComponentFixture<SnookerLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnookerLandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnookerLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
