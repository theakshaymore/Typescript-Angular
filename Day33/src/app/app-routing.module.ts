import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetemployeebyidComponent } from './getemployeebyid/getemployeebyid.component';

const routes: Routes = [{path:"getemployeebyid/:id",component:GetemployeebyidComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
