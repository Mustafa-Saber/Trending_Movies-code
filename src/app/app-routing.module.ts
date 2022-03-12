import { TrendingTvComponent } from './Component/movies/trending-tv/trending-tv.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Component/about/about.component';
import { AuthGuard } from './Component/auth.guard';
import { ContactComponent } from './Component/contact/contact.component';
import { HomeComponent } from './Component/home/home.component';
import { MoviesComponent } from './Component/movies/movies.component';
import { ActorDetailsComponent } from './Component/movies/trending-actors/actor-details/actor-details.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';
import { SignInComponent } from './Component/sign-in/sign-in.component';
import { SignUpComponent } from './Component/sign-up/sign-up.component';
import { NotAuthGuard } from './not-auth.guard';
import { MovieDetailsComponent } from './Component/movies/trending-movies/movie-details/movie-details.component';
import { TvDetailsComponent } from './Component/movies/trending-tv/tv-details/tv-details.component';
import { TrendingMoviesComponent } from './Component/movies/trending-movies/trending-movies.component';
import { TrendingActorsComponent } from './Component/movies/trending-actors/trending-actors.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'Trending/:Tv_Shows/:pages',

    // path: 'Trending',
    canActivate: [AuthGuard],
    component: MoviesComponent,
  },

  {
    path: 'movies/:pages',
    canActivate: [AuthGuard],
    component: TrendingMoviesComponent,
  },
  {
    path: 'Tv/:pages',
    canActivate: [AuthGuard],
    component: TrendingTvComponent,
  },
  {
    path: 'actors/:pages',
    canActivate: [AuthGuard],
    component: TrendingActorsComponent,
  },

  {
    path: 'actor/:id/:media_type',
    canActivate: [AuthGuard],
    component: ActorDetailsComponent,
  },
  {
    path: 'Movie-Detail/:id/:media_type',
    canActivate: [AuthGuard],
    component: MovieDetailsComponent,
  },
  {
    path: 'Tv-Details/:id/:media_type',
    canActivate: [AuthGuard],
    component: TvDetailsComponent,
  },
  { path: 'about-us', canActivate: [AuthGuard], component: AboutComponent },
  { path: 'bookink', canActivate: [AuthGuard], component: ContactComponent },
  { path: 'signUp', canActivate: [NotAuthGuard], component: SignUpComponent },
  { path: 'signIn', canActivate: [NotAuthGuard], component: SignInComponent },
  { path: '**', component: NotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
