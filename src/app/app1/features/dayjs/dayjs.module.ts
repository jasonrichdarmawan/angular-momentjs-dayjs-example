import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayjsRoutingModule } from './dayjs-routing.module';
import { DayjsBootstrap } from './dayjs.bootstrap';
import { NavModule } from './common/presentation/components/nav/nav.module';


@NgModule({
  declarations: [
    DayjsBootstrap
  ],
  imports: [
    CommonModule,
    DayjsRoutingModule,
    NavModule,
  ]
})
export class DayjsModule { }
