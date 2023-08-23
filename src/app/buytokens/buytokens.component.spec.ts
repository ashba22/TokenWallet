import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuytokensComponent } from './buytokens.component';

describe('BuytokensComponent', () => {
  let component: BuytokensComponent;
  let fixture: ComponentFixture<BuytokensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuytokensComponent]
    });
    fixture = TestBed.createComponent(BuytokensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
