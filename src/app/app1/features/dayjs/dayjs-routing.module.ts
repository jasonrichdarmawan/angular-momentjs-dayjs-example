import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayjsBootstrap } from './dayjs.bootstrap';

const routes: Routes = [
  {
    path: '',
    component: DayjsBootstrap,
    children: [
      {
        path: 'dayjs-page',
        loadChildren: () => import("./presentation/pages/dayjs-page/dayjs-page.module").then(m => m.DayjsPageModule),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dayjs-page'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayjsRoutingModule { }
