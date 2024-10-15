import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DartsboardTableComponent } from './dartsboard-table.component';

describe('DartsboardTableComponent', () => {
  let component: DartsboardTableComponent;
  let fixture: ComponentFixture<DartsboardTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DartsboardTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DartsboardTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
