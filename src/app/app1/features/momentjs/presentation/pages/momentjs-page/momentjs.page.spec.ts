import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentjsPage } from './momentjs.page';

describe('MomentjsPage', () => {
  let component: MomentjsPage;
  let fixture: ComponentFixture<MomentjsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MomentjsPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MomentjsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
