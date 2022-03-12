import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnChanges } from '@angular/core';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit, OnChanges {
  showMovies: boolean = false;
  showTvShows: boolean = false;
  showActors: boolean = false;
  showTvUrl: string = '';
  UrlNum: number = 1;

  // isWatch:boolean=true;
  UrlTest: string = '';
  trendingMovies: any;
  trendingTv: any;
  trendingPeople: any;
  imgPrefix: string = `https://image.tmdb.org/t/p/w500`;
  constructor(private _ActivatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.showTvUrl = this._ActivatedRoute.snapshot.params['Tv_Shows'];
    this.UrlNum = this._ActivatedRoute.snapshot.params['pages'];
    console.log(this.showTvUrl);
    switch (this.showTvUrl) {
      case 'movies':
        this.displayMovies();
        break;
      case 'Tv_Shows':
        this.displayTvShows();
        break;
      case 'actors':
        this.displayActors();
        break;
      default:
        break;
    }
  }

  ngOnChanges() {
    this.UrlNum = this._ActivatedRoute.snapshot.params['pages'];

    console.log(this.UrlNum);
  }
  displayMovies() {
    this.showMovies = true;
    this.showTvShows = false;
    this.showActors = false;
    this.UrlNum = this._ActivatedRoute.snapshot.params['pages'];
    console.log(this.UrlNum);
  }
  displayTvShows() {
    this.showMovies = false;
    this.showTvShows = true;
    this.showActors = false;
    this.UrlNum = this._ActivatedRoute.snapshot.params['pages'];
  }
  displayActors() {
    this.showMovies = false;
    this.showTvShows = false;
    this.showActors = true;
    this.UrlNum = this._ActivatedRoute.snapshot.params['pages'];
  }
}
