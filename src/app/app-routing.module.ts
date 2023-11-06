import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'app1',
    loadChildren: () => import("./app1/app1.module").then(m => m.App1Module),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'app1',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
