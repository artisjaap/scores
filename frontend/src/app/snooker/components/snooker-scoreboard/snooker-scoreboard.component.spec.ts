import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnookerScoreboardComponent } from './snooker-scoreboard.component';

describe('SnookerScoreboardComponent', () => {
  let component: SnookerScoreboardComponent;
  let fixture: ComponentFixture<SnookerScoreboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnookerScoreboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnookerScoreboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
