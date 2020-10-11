import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { AdminComponent } from './admin/admin.component'


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'admin', component: AdminComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
