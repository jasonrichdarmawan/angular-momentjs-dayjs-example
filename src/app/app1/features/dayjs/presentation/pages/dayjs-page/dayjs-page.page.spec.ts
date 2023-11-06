import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayjsPagePage } from './dayjs-page.page';

describe('DayjsPagePage', () => {
  let component: DayjsPagePage;
  let fixture: ComponentFixture<DayjsPagePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayjsPagePage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayjsPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
