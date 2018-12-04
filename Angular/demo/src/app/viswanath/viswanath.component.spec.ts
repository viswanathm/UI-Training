import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViswanathComponent } from './viswanath.component';

describe('ViswanathComponent', () => {
  let component: ViswanathComponent;
  let fixture: ComponentFixture<ViswanathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViswanathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViswanathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
