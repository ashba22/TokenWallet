import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayqrcodeComponent } from './payqrcode.component';

describe('PayqrcodeComponent', () => {
  let component: PayqrcodeComponent;
  let fixture: ComponentFixture<PayqrcodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayqrcodeComponent]
    });
    fixture = TestBed.createComponent(PayqrcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
