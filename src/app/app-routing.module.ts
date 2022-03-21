import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GallaryComponent } from './gallary/gallary.component';
import { HomeComponent } from './home/home.component';
import { ImageComponent } from './image/image.component';
import { HttpClient } from '@angular/common/http';
import { DashboardModel } from './dashboard/dashboard.model';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'home',component: HomeComponent},
  {path:'dashboard',component: DashboardComponent},
  {path:'gallary',component: GallaryComponent},
  {path:'image/:id',component:ImageComponent},
  {path:'login',component:LoginComponent },
  {path:'',redirectTo:'/gallary',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
