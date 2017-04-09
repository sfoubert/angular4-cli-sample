import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Movie} from "./movie.model";
import {Http} from "@angular/http";

@Injectable()
export class MovieService {

  constructor(private http: Http) { }


  getMovies(): Observable<Movie[]> {
    return this.http.get('/api/movie')
      .map(response => response.json())
      .map(json => json.content as Movie[])
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err =  JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
