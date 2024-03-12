import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new BehaviorSubject<any>(null);
  public user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) { }

  userInfo(): Observable<any> {
    return this.http
      .post<any>(`http://panel.mauricio.martini.dina.local/passport/user/info`, {})
      .pipe(
        tap((data) => {
          if(data.hasOwnProperty('hashId')){
            this.userSubject.next(data);
          }
        }),
      )
      .pipe(
        catchError((error) => {
          return throwError(() => error);
        }),
      );
  }
}
