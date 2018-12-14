import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchTableComponent } from './sch-table/sch-table.component';

const routes: Routes = [
  { path: 'table', component: SchTableComponent },
  { path: '', redirectTo: '/table', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
