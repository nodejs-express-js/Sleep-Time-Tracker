import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { authguardGuard } from './guard/authguard.guard';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
export const routes: Routes = [
    {path: '',component: HomeComponent,canActivate:[authguardGuard]},
    {path: 'login',component: LoginComponent},
    {path:'signup',component:SignupComponent}
];
