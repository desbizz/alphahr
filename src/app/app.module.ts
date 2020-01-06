import { SpinnerComponent } from 'src/components/spinner/spinner.component';
import { LoginComponent } from 'src/components/login/login.component';

import { HeaderComponent } from './../components/header/header.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';

import { BasicAuthInterceptor } from 'src/services/basic-auth.interceptor.service';
import { ErrorInterceptor } from 'src/services/error.interceptor.service';
import { AuthGuard } from 'src/services/auth-gaurd.service';
import { StaffComponent } from 'src/components/staff/staff.component';
import { JobComponent } from 'src/components/job/job.component';
import { AccountComponent } from 'src/components/account/account.component';
import { StaffPageComponent } from 'src/components/staff-page/staff-page.component';



@NgModule({
  declarations: [
    AppComponent,
    StaffComponent,
    JobComponent,
    AccountComponent,

    HeaderComponent,
    StaffPageComponent,
   
    LoginComponent,
    SpinnerComponent,
    
  //  LoginFormComponent,
 //   RegisterFormComponent,
  //  UserService
 
],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() ,// ToastrModule added
    RouterModule.forRoot([
     { path: 'newstaff', component: StaffComponent },
     { path: 'editstaff/:id', component: StaffComponent },
     { path: 'editJob', component: JobComponent },
     { path: 'editaccount', component: AccountComponent },
     { path: 'staff', component: StaffPageComponent },
     { path: 'allowance', component: StaffPageComponent },
     { path: 'deduction', component: StaffPageComponent },
    
    // { path: '',component: ListrechargeComponent, canActivate: [AuthGuard] },
     { path: 'login', component: LoginComponent },
  
    ])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
