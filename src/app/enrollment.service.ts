import { Injectable } from '@angular/core';
import{HttpClient, HttpErrorResponse} from '@angular/common/http';
import {user} from './user';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  constructor(private _http:HttpClient) { }
  enroll(user:user)
  {
    return this._http.post<any>('https://enrollmentformtd-default-rtdb.firebaseio.com/enrolldata.json',user)
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error:HttpErrorResponse)
  {
    return throwError(error.message|| 'Server Error');
  }
}
