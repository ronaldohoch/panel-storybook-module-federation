import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  userInfo(body: any): Observable<any> {
    return this.http
      .post<any>(`http://panel.mauricio.martini.dina.local/passport/user/info`, body)
      .pipe(
        catchError((error) => {
          return throwError(() => error);
        }),
      );
  }
}
