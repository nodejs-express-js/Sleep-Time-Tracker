import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { authguardGuard } from './authguard.guard';
export const routes: Routes = [
    {path: '', component:HomeComponent,canActivate:[authguardGuard]},
    {path: 'home', component: HomeComponent,canActivate:[authguardGuard]},
    {path: 'login', component: LoginComponent},
    {path:'signup', component: SignupComponent},
    {path: '**', redirectTo: 'home'}
];
