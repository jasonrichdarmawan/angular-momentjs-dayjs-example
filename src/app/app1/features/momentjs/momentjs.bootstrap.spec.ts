import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentjsBootstrap } from './momentjs.bootstrap';

describe('MomentjsBootstrap', () => {
  let component: MomentjsBootstrap;
  let fixture: ComponentFixture<MomentjsBootstrap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MomentjsBootstrap ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MomentjsBootstrap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
