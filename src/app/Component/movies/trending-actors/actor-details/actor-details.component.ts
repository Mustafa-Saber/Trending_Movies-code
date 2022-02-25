import { MoviesService } from './../../../movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.css'],
})
export class ActorDetailsComponent implements OnInit {
  id: string = '634649';
  media_type: string = '';
  imgPrefix: string = `https://image.tmdb.org/t/p/w500`;
  actrDtetails: any = {};

  constructor(
    private _MoviesService: MoviesService,
    private _ActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.params['id'];
    this.media_type = this._ActivatedRoute.snapshot.params['media_type'];
    this._MoviesService
      .getmovieDetails(this.id, this.media_type)
      .subscribe((res) => {
        this.actrDtetails = res;
        console.log(this.actrDtetails);
      });
  }
}
