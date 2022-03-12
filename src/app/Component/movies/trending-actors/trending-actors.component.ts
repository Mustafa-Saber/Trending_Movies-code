import { MoviesService } from './../../movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-trending-actors',
  templateUrl: './trending-actors.component.html',
  styleUrls: ['./trending-actors.component.css'],
})
export class TrendingActorsComponent implements OnInit {
  trendingActors: any[] = [];
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
    this.getAllActors(this.showTvUrl);
  }

  getAllActors(pageNamber: number) {
    this._MoviesService
      .getTrending(pageNamber, 'person')
      .subscribe((response) => {
        this.trendingActors = response.results;
        this.totalItems = response.total_results / 2;
        this.currentPage = response.page;
        console.log(this.trendingActors);
      });
  }

  pageChanged(e: any) {
    this._Router.navigate(['/actors', this.currentPage]);
    this.getAllActors(this.currentPage);
  }
}
