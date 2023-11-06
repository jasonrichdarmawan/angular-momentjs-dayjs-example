import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayjsPage } from './dayjs.page';

const routes: Routes = [
  {
    path: '',
    component: DayjsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayjsPageRoutingModule { }
