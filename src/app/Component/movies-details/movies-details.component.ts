import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css'],
})
export class MoviesDetailsComponent implements OnInit {
  id: string = '';
  media_type: string = '';
  imgPrefix: string = `https://image.tmdb.org/t/p/w500`;
  moveDtetails: any = {};

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private MoviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.params['id'];
    this.media_type = this._ActivatedRoute.snapshot.params['media_type'];

    this.MoviesService.getmovieDetails(this.id, this.media_type).subscribe(
      (res) => {
        this.moveDtetails = res;
        console.log(this.moveDtetails);
      }
    );
  }
}
