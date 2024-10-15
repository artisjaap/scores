import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DartsPlayerScoreComponent } from './darts-player-score.component';

describe('DartsPlayerScoreComponent', () => {
  let component: DartsPlayerScoreComponent;
  let fixture: ComponentFixture<DartsPlayerScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DartsPlayerScoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DartsPlayerScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
