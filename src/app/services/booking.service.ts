import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { retry, catchError } from 'rxjs/operators';
import { Result } from '../model/resultobj';


const endpoint = 'http://52.187.244.160/Booking/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*' 
  })
};

@Injectable({
  providedIn: 'root'
})

export class BookingService {
  purcaseorders: any = [];

  constructor(private http: HttpClient) { }

  getPO(id): Observable<Result> {
    console.log("PO NUmber" + id);
    return this.http.get<Result>('/Booking/getBookingInfo?poNo='+id, httpOptions);
           //.pipe(map((result: Response) => this.purcaseorders = result.json()));
  }


  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}\nCode:${error.Code}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
