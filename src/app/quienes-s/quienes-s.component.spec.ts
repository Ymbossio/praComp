import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuienesSComponent } from './quienes-s.component';

describe('QuienesSComponent', () => {
  let component: QuienesSComponent;
  let fixture: ComponentFixture<QuienesSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuienesSComponent]
    });
    fixture = TestBed.createComponent(QuienesSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
