import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDepartmentComponent } from './admin-department/admin-department.component';
import { EmployeeDepartmentComponent } from './employee-department/employee-department.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './admin-department/register/register.component';
import { AppComponent } from './app.component';

const routes: Routes = [
    {path:'', component : LoginComponent},
    {path:'profile',component : ProfileComponent},
    {path:'admin',component : AdminDepartmentComponent},
    {path:'employee',component : EmployeeDepartmentComponent},
    {path:'register',component:RegisterComponent},
    {path: 'logout',component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
