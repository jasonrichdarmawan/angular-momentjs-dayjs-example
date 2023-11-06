import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { App1Bootstrap } from './app1.bootstrap';

const routes: Routes = [
  {
    path: '',
    component: App1Bootstrap,
    children: [
      {
        path: 'momentjs',
        loadChildren: () => import("./features/momentjs/momentjs.module").then(m => m.MomentjsModule),
      },
      {
        path: 'dayjs',
        loadChildren: () => import("./features/dayjs/dayjs.module").then(m => m.DayjsModule),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'momentjs',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class App1RoutingModule { }
