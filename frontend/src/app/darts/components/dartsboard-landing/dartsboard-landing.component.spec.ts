import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DartsboardLandingComponent } from './dartsboard-landing.component';

describe('DartsboardLandingComponent', () => {
  let component: DartsboardLandingComponent;
  let fixture: ComponentFixture<DartsboardLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DartsboardLandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DartsboardLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
