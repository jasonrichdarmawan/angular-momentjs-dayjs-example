import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayjsPage } from './dayjs.page';

describe('DayjsPage', () => {
  let component: DayjsPage;
  let fixture: ComponentFixture<DayjsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayjsPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayjsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
