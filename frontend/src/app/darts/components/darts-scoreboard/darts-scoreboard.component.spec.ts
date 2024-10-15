import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DartsScoreboardComponent } from './darts-scoreboard.component';

describe('DartsScoreboardComponent', () => {
  let component: DartsScoreboardComponent;
  let fixture: ComponentFixture<DartsScoreboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DartsScoreboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DartsScoreboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
