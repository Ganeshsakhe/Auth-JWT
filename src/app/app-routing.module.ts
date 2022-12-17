import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthRouteGuard } from './shared/services/guards/auth.route.guard';

const routes: Routes = [{
  path:'',
  loadChildren: () => import('./home/home.module').then(_ => _.HomeModule),
},{
  path:'login',
  loadChildren: () => import('./login/login.module').then(_ => _.LoginModule),
  canActivate: [AuthRouteGuard]
},{
  path:'dashboard',
  loadChildren: () => import('./dashboard/dashboard.module').then(_ => _.DashboardModule),
  canActivate: [AuthRouteGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
