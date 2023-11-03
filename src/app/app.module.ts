import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PostListComponent} from "./modules/post/components/post-list/post-list.component";
import {CreatePostComponent} from "./modules/post/components/create-post/create-post.component";
import {LoginComponent} from "./modules/auth/components/login/login.component";
import {PostDetailComponent} from "./modules/post/components/post-detail/post-detail.component";
import { HomeComponent } from './modules/home/home.component';
import { WidgetComponent } from './modules/home/components/widget/widget.component';
import { RegisterComponent } from './modules/auth/components/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    CreatePostComponent,
    PostDetailComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    WidgetComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderComponent,RegisterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
