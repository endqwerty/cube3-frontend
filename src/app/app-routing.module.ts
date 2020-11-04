import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'
import { AdminComponent } from './admin/admin.component'
import { CardComponent } from './card/card.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'cards', component: CardComponent },
  { path: 'admin', component: AdminComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
