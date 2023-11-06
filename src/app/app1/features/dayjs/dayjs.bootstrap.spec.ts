import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayjsBootstrap } from './dayjs.bootstrap';

describe('DayjsBootstrap', () => {
  let component: DayjsBootstrap;
  let fixture: ComponentFixture<DayjsBootstrap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayjsBootstrap ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayjsBootstrap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
