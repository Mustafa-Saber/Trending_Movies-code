import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../movies.service';
@Component({
  selector: 'app-trending-movies',
  templateUrl: './trending-movies.component.html',
  styleUrls: ['./trending-movies.component.css'],
})
export class TrendingMoviesComponent implements OnInit {
  trendingMovies: any[] = [];
  imgPrefix: string = `https://image.tmdb.org/t/p/w500`;
  totalItems: number = 0;
  currentPage: number = 1;
  showTvUrl: number = 0;

  constructor(
    private _MoviesService: MoviesService,
    private _ActivatedRoute: ActivatedRoute,
    private _Router: Router
  ) {}

  ngOnInit(): void {
    this.showTvUrl = this._ActivatedRoute.snapshot.params['pages'];
    this.getAllMovies(this.showTvUrl);
  }

  getAllMovies(pageNamber: number) {
    // this._Router.navigate(['/Tv', 'Tv_Shows', event]);
    this._MoviesService
      .getTrending(pageNamber, 'movie')
      .subscribe((response) => {
        this.trendingMovies = response.results;
        this.totalItems = response.total_results / 2;
        this.currentPage = response.page;
      });
  }

  pageChanged(e: any) {
    this._Router.navigate(['/movies', this.currentPage]);
    this.getAllMovies(this.currentPage);
  }
}
