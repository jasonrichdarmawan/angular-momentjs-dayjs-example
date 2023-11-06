import { ComponentFixture, TestBed } from '@angular/core/testing';

import { App1Bootstrap } from './app1.bootstrap';

describe('App1Bootstrap', () => {
  let component: App1Bootstrap;
  let fixture: ComponentFixture<App1Bootstrap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ App1Bootstrap ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(App1Bootstrap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
