import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MomentjsRoutingModule } from './momentjs-routing.module';
import { MomentjsBootstrap } from './momentjs.bootstrap';
import { NavModule } from './common/presentation/components/nav/nav.module';


@NgModule({
  declarations: [
    MomentjsBootstrap
  ],
  imports: [
    CommonModule,
    MomentjsRoutingModule,
    NavModule,
  ]
})
export class MomentjsModule { }
