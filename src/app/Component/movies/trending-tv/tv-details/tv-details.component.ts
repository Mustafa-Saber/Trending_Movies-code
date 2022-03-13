import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/Component/movies.service';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.css'],
})
export class TvDetailsComponent implements OnInit {
  id: string = '';
  media_type: string = '';
  TvDtetails: any = {};
  imgPrefix: string = `https://image.tmdb.org/t/p/w500`;
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _MoviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.params['id'];
    this.media_type = this._ActivatedRoute.snapshot.params['media_type'];

    this._MoviesService
      .getmovieDetails(this.id, this.media_type)
      .subscribe((res) => {
        this.TvDtetails = res;
      });
  }
}
