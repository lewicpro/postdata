import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecureAuthComponent } from './secure-auth/secure-auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: SecureAuthComponent
},
  {
    path: 'dashboard',
    component: DashboardComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
