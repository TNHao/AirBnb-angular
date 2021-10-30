import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

let urlAPI = '';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { 
    urlAPI = environment.urlAPI;
  }

  get(uri: any): Observable<any> {
    return this.http.get(urlAPI + uri).pipe(
      tap(() => {}),
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

  post(uri: any, data: any): Observable<any> {
    return this.http.post(urlAPI + uri, data).pipe(
      tap(() => {}),
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

}
