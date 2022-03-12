import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../movies.service';

@Component({
  selector: 'app-trending-tv',
  templateUrl: './trending-tv.component.html',
  styleUrls: ['./trending-tv.component.css'],
})
export class TrendingTvComponent implements OnInit {
  showTvUrl: number = 0;
  currentPage: number = 1;
  totalItems: number = 0;
  trendingTv: any[] = [];
  imgPrefix: string = `https://image.tmdb.org/t/p/w500`;

  constructor(
    private _MoviesService: MoviesService,
    private _ActivatedRoute: ActivatedRoute,
    private _Router: Router
  ) {}

  ngOnInit(): void {
    this.showTvUrl = this._ActivatedRoute.snapshot.params['pages'];
    this.getAllMovies(this.showTvUrl);

    // localStorage.setItem('pagesNum', JSON.stringify(this.currentPage));
    // let pagNu = JSON.parse(localStorage.getItem('pagesNum') || '{}');
    // if (pagNu) {
    //   // console.log(JSON.parse(localStorage.getItem('pagesNum'))
    //   console.log(pagNu);
    //   this.getAllMovies(pagNu);
    // } else {
    //   this.getAllMovies(this.currentPage);
    // }
  }

  getAllMovies(pageNamber: number) {
    // this._Router.navigate(['/Tv', 'Tv_Shows', event]);
    this._MoviesService.getTrending(pageNamber, 'tv').subscribe((response) => {
      this.trendingTv = response.results;
      this.totalItems = response.total_results / 2;
      this.currentPage = response.page;
    });
  }

  pageChanged(e: any) {
    // console.log(this.currentPage);
    // console.log(event);
    this._Router.navigate(['/Tv', this.currentPage]);

    console.log(e);
    this.getAllMovies(this.currentPage);
  }

  // pageChanged(event: any) {
  // console.log(e);
  // let pagNu = JSON.parse(localStorage.getItem('pagesNum') || '{}');
  // this.getAllMovies(this.currentPage);
  // if (pagNu) {
  //   // console.log(JSON.parse(localStorage.getItem('pagesNum'))
  //   console.log(pagNu);
  //   this.getAllMovies(pagNu);
  // } else {
  //   this.getAllMovies(this.currentPage);
  // }

  //   this._Router.navigate(['/Trending', 'Tv_Shows', event]);
  //   this.getAllMovies(event);
  // }
}
