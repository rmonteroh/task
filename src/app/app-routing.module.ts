import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent, canActivate:[AuthGuard]},
  {path:'contact', component:ContactComponent, canActivate:[AuthGuard]},
  {path:'about-us', component:AboutUsComponent, canActivate:[AuthGuard]},
  {path:'**', redirectTo:'/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
