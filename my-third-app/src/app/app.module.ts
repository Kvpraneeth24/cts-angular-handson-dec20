import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { FormsModule } from '@angular/forms';
import { UserDetailsComponent } from './user-details/user-details.component';
import { Routes,RouterModule } from '@angular/router';

let routes : Routes = [  
  { path:"", component :EmployeeRegisterComponent},
  { path:"register", component:EmployeeRegisterComponent},
  { path:"user-details", component:UserDetailsComponent},
  { path:"employee-details", component:EmployeeDetailsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeRegisterComponent,
    EmployeeDetailsComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
