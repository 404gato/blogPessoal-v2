import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [

  {path:'', redirectTo: 'login', pathMatch: 'full'},

  {path:'login', component: LoginComponent},
  {path:'cadastrar', component: SignupComponent},

  {path: 'home', component: HomeComponent},
  {path: 'tema', component: TemaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
