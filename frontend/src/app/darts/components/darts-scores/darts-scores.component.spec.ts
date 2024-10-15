import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DartsScoresComponent } from './darts-scores.component';

describe('DartsScoresComponent', () => {
  let component: DartsScoresComponent;
  let fixture: ComponentFixture<DartsScoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DartsScoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DartsScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
