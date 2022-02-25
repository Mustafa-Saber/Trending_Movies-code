import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../movies.service';

@Component({
  selector: 'app-trending-tv',
  templateUrl: './trending-tv.component.html',
  styleUrls: ['./trending-tv.component.css']
})
export class TrendingTvComponent implements OnInit {
  trendingTv:any[]=[];
  imgPrefix:string=`https://image.tmdb.org/t/p/w500`;

  constructor(private _MoviesService:MoviesService) { }

  ngOnInit(): void {
    this._MoviesService.getMoives('tv').subscribe((response)=>{
      this.trendingTv=response.results
      
    });
  }

}
