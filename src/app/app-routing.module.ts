import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { isConnectedGuard } from './core/is-connected.guard';
import { isadminGuard } from './core/isadmin.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [isConnectedGuard],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [isadminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
