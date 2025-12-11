import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteControlSnookerComponent } from './remote-control-snooker.component';

describe('RemoteControlSnookerComponent', () => {
  let component: RemoteControlSnookerComponent;
  let fixture: ComponentFixture<RemoteControlSnookerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoteControlSnookerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoteControlSnookerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
