import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { App1RoutingModule } from './app1-routing.module';
import { App1Bootstrap } from './app1.bootstrap';
import { NavModule } from './common/presentation/components/nav/nav.module';


@NgModule({
  declarations: [
    App1Bootstrap
  ],
  imports: [
    CommonModule,
    App1RoutingModule,
    NavModule,
  ],
})
export class App1Module { }
