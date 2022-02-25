import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../movies.service';
@Component({
  selector: 'app-trending-movies',
  templateUrl: './trending-movies.component.html',
  styleUrls: ['./trending-movies.component.css']
})
export class TrendingMoviesComponent implements OnInit {
  trendingMovies:any[]=[];
  imgPrefix:string=`https://image.tmdb.org/t/p/w500`;
  
    constructor(private _MoviesService:MoviesService) { }
  
    ngOnInit(): void {
      this._MoviesService.getMoives('People').subscribe((response)=>{
        console.log(response);
        this.trendingMovies=response.results
        
        
      });
    }
  
  }
  