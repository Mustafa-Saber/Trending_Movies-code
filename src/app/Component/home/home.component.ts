import { MoviesService } from './../movies.service';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  smallPlans: any = {
    title: 'Regular',
    Switch: 'Switch plans or cancel anytime',
    Stream: 'Reg Stream 65+ top Liveular',
    tv: ' TV channels',
    btn: ' selec Plan',
  };
  trendingMovies: any;
  trendingTv: any;
  trendingPeople: any;
  imgPrefix: string = `https://image.tmdb.org/t/p/w500`;
  constructor(private _MoviesService: MoviesService) {}

  ngOnInit(): void {
    this._MoviesService.getMoives('movie').subscribe((response) => {
      this.trendingMovies = response.results.slice(2, 6);
    });
    this._MoviesService.getMoives('tv').subscribe((response) => {
      this.trendingTv = response.results.slice(2, 6);
    });
    this._MoviesService.getMoives('person').subscribe((response) => {
      this.trendingPeople = response.results.slice(0, 4);
    });
  }

  // @HostListener ('window:scroll') testData(){
  // let currntScroll = window.scrollY;
  // if (currntScroll >1500){
  //   this._MoviesService.getMoives('movie').subscribe((response)=>{
  //     this.trendingMovies=response.results.slice(2,6);
  //     console.log(this.trendingMovies);

  //   });
  //   this._MoviesService.getMoives('tv').subscribe((response)=>{
  //     this.trendingTv=response.results.slice(2,6);
  //     console.log(this.trendingTv);

  //   });
  //   this._MoviesService.getMoives('person').subscribe((response)=>{
  //     this.trendingPeople=response.results.slice(0,4);
  //     console.log(this.trendingPeople);

  //   })
  // }
  // }

  getStartedBtn() {
    document.querySelector('#trendingMovies')?.scrollIntoView();
  }
}
