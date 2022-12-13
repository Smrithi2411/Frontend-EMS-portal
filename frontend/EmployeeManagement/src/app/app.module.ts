import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminDepartmentComponent } from './admin-department/admin-department.component';
import { EmployeeDepartmentComponent } from './employee-department/employee-department.component';
import { ListEmpComponent } from './admin-department/list-emp/list-emp.component';
import { CreateUpdateEmpComponent } from './admin-department/create-update-emp/create-update-emp.component';
import { PublicService } from './services/public.service';
import { ViewComponent } from './admin-department/view/view.component';
import { RegisterComponent } from './admin-department/register/register.component';
import { ShowleaveComponent } from './employee-department/showleave/showleave.component';
import { EditleaveComponent } from './employee-department/editleave/editleave.component';
import { ListleaveComponent } from './listleave/listleave.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    AdminDepartmentComponent,
    EmployeeDepartmentComponent,
    ListEmpComponent,
    CreateUpdateEmpComponent,
    ViewComponent,
    RegisterComponent,
    ShowleaveComponent,
    EditleaveComponent,
    ListleaveComponent,
    HeaderComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [PublicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
