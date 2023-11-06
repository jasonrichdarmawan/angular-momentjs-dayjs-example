import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayjsPageRoutingModule } from './dayjs-page-routing.module';
import { DayjsPagePage } from './dayjs-page.page';


@NgModule({
  declarations: [
    DayjsPagePage
  ],
  imports: [
    CommonModule,
    DayjsPageRoutingModule
  ]
})
export class DayjsPageModule { }
