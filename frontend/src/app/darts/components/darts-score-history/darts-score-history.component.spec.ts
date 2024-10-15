import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DartsScoreHistoryComponent } from './darts-score-history.component';

describe('DartsScoreHistoryComponent', () => {
  let component: DartsScoreHistoryComponent;
  let fixture: ComponentFixture<DartsScoreHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DartsScoreHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DartsScoreHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
