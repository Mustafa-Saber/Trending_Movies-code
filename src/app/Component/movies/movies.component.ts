import { Component, OnInit } from '@angular/core';



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
  UrlTest :string =''
  trendingMovies: any;
  trendingTv: any;
  trendingPeople: any;
  imgPrefix: string = `https://image.tmdb.org/t/p/w500`;
  constructor( ) {
    
  }

   

  ngOnInit(): void {

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
