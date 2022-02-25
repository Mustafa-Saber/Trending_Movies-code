import { MoviesService } from './../../movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trending-actors',
  templateUrl: './trending-actors.component.html',
  styleUrls: ['./trending-actors.component.css'],
})
export class TrendingActorsComponent implements OnInit {
  trendingActors: any[] = [];
  imgPrefix: string = `https://image.tmdb.org/t/p/w500`;

  constructor(private _MoviesService: MoviesService) {}

  ngOnInit(): void {
    this._MoviesService.getMoives('person').subscribe((response) => {
      this.trendingActors = response.results;
      console.log(this.trendingActors);
    });
  }
}
