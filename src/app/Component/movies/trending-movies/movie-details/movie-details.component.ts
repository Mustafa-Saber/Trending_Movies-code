import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/Component/movies.service';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  id:string =``;
  media_type:string =``;
  movieDtetails: any ={};
  imgPrefix: string = `https://image.tmdb.org/t/p/w500`;
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _MoviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.params['id'];
    this.media_type = this._ActivatedRoute.snapshot.params['media_type'];

    this._MoviesService.getmovieDetails(this.id, this.media_type).subscribe(
      (res) => {
        this.movieDtetails = res;
        console.log(this.movieDtetails);
      }
    );
    


    
  }

}




