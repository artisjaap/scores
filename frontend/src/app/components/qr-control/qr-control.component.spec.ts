import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrControlComponent } from './qr-control.component';

describe('QrControlComponent', () => {
  let component: QrControlComponent;
  let fixture: ComponentFixture<QrControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QrControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
