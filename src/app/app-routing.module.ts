import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./modules/auth/components/login/login.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./modules/home/home.component";
import {RegisterComponent} from "./modules/auth/components/register/register.component";
import {ForgottenPasswordComponent} from "./modules/auth/components/forgotten-password/forgotten-password.component";
import {CreatePostComponent} from "./modules/post/components/create-post/create-post.component";


const routes: Routes = [
  {path :"", component: LoginComponent},
  {path :"home", component: HomeComponent},
  {path :"register", component: RegisterComponent},
{path :"forgotten-password", component: ForgottenPasswordComponent},
  {path :"modal", component: CreatePostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
