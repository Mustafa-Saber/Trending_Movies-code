import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Component/about/about.component';
import { AuthGuard } from './Component/auth.guard';
import { ContactComponent } from './Component/contact/contact.component';
import { HomeComponent } from './Component/home/home.component';
import { MoviesDetailsComponent } from './Component/movies-details/movies-details.component';
import { MoviesComponent } from './Component/movies/movies.component';
import { ActorDetailsComponent } from './Component/movies/trending-actors/actor-details/actor-details.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';
import { SignInComponent } from './Component/sign-in/sign-in.component';
import { SignUpComponent } from './Component/sign-up/sign-up.component';
import { NotAuthGuard } from './not-auth.guard';

const routes: Routes = [
  {path:'' ,redirectTo:"home",pathMatch:"full" },
  {path:"home" , component:HomeComponent },
  {path:"movies" ,canActivate:[AuthGuard], component:MoviesComponent },
  {path:"movie-details/:id/:media_type" ,canActivate:[AuthGuard], component:MoviesDetailsComponent },
  {path:"actor/:id/:media_type", canActivate:[AuthGuard], component:ActorDetailsComponent},
  {path:"about-us" ,canActivate:[AuthGuard], component:AboutComponent },
  {path:"bookink" ,canActivate:[AuthGuard], component:ContactComponent },
  {path:"signUp" ,canActivate:[NotAuthGuard], component:SignUpComponent},
  {path:"signIn" ,canActivate:[NotAuthGuard] , component:SignInComponent },
  {path:"**" , component:NotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes , { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
