import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BioComponent} from "./components/bio/bio.component";
import { RatingComponent} from "./components/rating/rating.component";
import { TagsComponent} from "./components/tags/tags.component"
import { Navbar2Component} from "./components/navbar2/navbar2.component";
import { ReportComponent} from "./components/report/report.component";
import { ServicesComponent} from "./components/services/services.component"
import { SearchResultsComponent} from "./components/search-results/search-results.component";

import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {AuthGuard} from './guards/auth.guard'




const appRoutes: Routes =  [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'profile', component: ProfileComponent},
  {path:'navbar', component: NavbarComponent},
  {path:'bio', component: BioComponent},
  {path:'tags', component: TagsComponent},
  {path:'navbar2', component: Navbar2Component},
  {path:'report', component: ReportComponent},
  {path:'services', component: ServicesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
	  BioComponent,
    RatingComponent,
    TagsComponent,
    Navbar2Component,
    ReportComponent,
    ServicesComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
