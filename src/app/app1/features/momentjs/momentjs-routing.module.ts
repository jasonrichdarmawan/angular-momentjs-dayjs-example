import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MomentjsBootstrap } from './momentjs.bootstrap';

const routes: Routes = [
  {
    path: '',
    component: MomentjsBootstrap,
    children: [
      {
        path: 'momentjs-page',
        loadChildren: () => import("./presentation/pages/momentjs-page/momentjs-page.module").then(m => m.MomentjsPageModule),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'momentjs-page',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MomentjsRoutingModule { }
