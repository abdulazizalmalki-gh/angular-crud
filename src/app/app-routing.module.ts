import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpListComponent } from './components/emp-list/emp-list.component';

const routes: Routes = [
  {
    path: '', component: EmpListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
