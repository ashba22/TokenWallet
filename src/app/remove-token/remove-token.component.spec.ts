import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveTokenComponent } from './remove-token.component';

describe('RemoveTokenComponent', () => {
  let component: RemoveTokenComponent;
  let fixture: ComponentFixture<RemoveTokenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoveTokenComponent]
    });
    fixture = TestBed.createComponent(RemoveTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
