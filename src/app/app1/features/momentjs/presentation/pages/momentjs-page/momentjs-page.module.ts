import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MomentjsPageRoutingModule } from './momentjs-page-routing.module';
import { MomentjsPage } from './momentjs.page';

@NgModule({
  declarations: [
    MomentjsPage
  ],
  imports: [
    CommonModule,
    MomentjsPageRoutingModule
  ]
})
export class MomentjsPageModule { }
