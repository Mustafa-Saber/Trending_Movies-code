import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

ReactiveFormsModule;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './Component/sign-in/sign-in.component';
import { SignUpComponent } from './Component/sign-up/sign-up.component';
import { ProfileComponent } from './Component/profile/profile.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { MoviesComponent } from './Component/movies/movies.component';
import { HomeComponent } from './Component/home/home.component';
import { AboutComponent } from './Component/about/about.component';
import { ContactComponent } from './Component/contact/contact.component';
import { FooterComponent } from './Component/footer/footer.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';
import { TrendingActorsComponent } from './Component/movies/trending-actors/trending-actors.component';
import { TrendingMoviesComponent } from './Component/movies/trending-movies/trending-movies.component';
import { TrendingTvComponent } from './Component/movies/trending-tv/trending-tv.component';
import { SmallPlansComponent } from './Component/home/small-plans/small-plans.component';
import { HttpClientModule } from '@angular/common/http';
import { ActorDetailsComponent } from './Component/movies/trending-actors/actor-details/actor-details.component';
import { ScrollTopBtnComponent } from './Component/scroll-top-btn/scroll-top-btn.component';
import { MovieDetailsComponent } from './Component/movies/trending-movies/movie-details/movie-details.component';
import { TvDetailsComponent } from './Component/movies/trending-tv/tv-details/tv-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    ProfileComponent,
    NavbarComponent,
    MoviesComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    NotFoundComponent,
    TrendingActorsComponent,
    TrendingMoviesComponent,
    TrendingTvComponent,
    SmallPlansComponent,
    ActorDetailsComponent,
    ScrollTopBtnComponent,
    MovieDetailsComponent,
    TvDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
