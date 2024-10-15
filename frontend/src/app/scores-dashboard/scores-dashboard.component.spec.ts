import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoresDashboardComponent } from './scores-dashboard.component';

describe('ScoresDashboardComponent', () => {
  let component: ScoresDashboardComponent;
  let fixture: ComponentFixture<ScoresDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScoresDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScoresDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
