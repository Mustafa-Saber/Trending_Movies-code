import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  key :string =' '
  baseURL:string=`https://api.themoviedb.org/3/trending/all/week?api_key=c8c85c867880ce8e782367dd70475e2d`
  
    constructor(private _HttpClient:HttpClient ) { }
    getMoives(movieType:string):Observable<any>{
      return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${movieType}/week?api_key=c8c85c867880ce8e782367dd70475e2d`)
  
    }
    getmovieDetails(id:string , media_type:string):Observable <any>{
      return this._HttpClient.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=c8c85c867880ce8e782367dd70475e2d&language=en-US`)
    }
  }
  