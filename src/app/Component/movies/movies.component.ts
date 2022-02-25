import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  showMovies: boolean = true;
  showTvShows: boolean = false;
  showActors: boolean = false;

  // isWatch:boolean=true;
  trendingMovies: any;
  trendingTv: any;
  trendingPeople: any;
  imgPrefix: string = `https://image.tmdb.org/t/p/w500`;
  constructor(private _MoviesService: MoviesService) {}

  ngOnInit(): void {
    this._MoviesService.getMoives('movie').subscribe((response) => {
      console.log(response);
      this.trendingMovies = response.results;
    });
    this._MoviesService.getMoives('tv').subscribe((response) => {
      this.trendingTv = response.results;
    });
    this._MoviesService.getMoives('person').subscribe((response) => {
      this.trendingPeople = response.results;
      console.log(this.trendingPeople);
    });
  }

  displayMovies() {
    this.showMovies = true;
    this.showTvShows = false;
    this.showActors = false;
  }
  displayTvShows() {
    this.showMovies = false;
    this.showTvShows = true;
    this.showActors = false;
  }
  displayActors() {
    this.showMovies = false;
    this.showTvShows = false;
    this.showActors = true;
  }
}
