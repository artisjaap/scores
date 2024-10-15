import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnookerPlayerComponent } from './snooker-player.component';

describe('SnookerPlayerComponent', () => {
  let component: SnookerPlayerComponent;
  let fixture: ComponentFixture<SnookerPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnookerPlayerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnookerPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
