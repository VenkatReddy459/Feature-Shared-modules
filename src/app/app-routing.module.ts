import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { HiComponent } from './departments/hi/hi.component';
import { HelloComponent } from './departments/hello/hello.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [{path:'',redirectTo:"/main",pathMatch:"full"},
{path:'main',component:MainComponent},
{path:'employee',component:EmployeeComponent},
{path:'hi',component:HiComponent},
{path:'hello',component:HelloComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
