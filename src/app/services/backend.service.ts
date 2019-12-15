import { Injectable } from '@angular/core';
//import { STUDENTS } from './mock.data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  //students = STUDENTS["0"]["data"];
  private _backendUrl = "localhost/test2/testApp2/src/app/PHP_API/php_api.php?action=g";

  constructor(private _http: HttpClient) { }

  getData() {
    //return this.students;
    return this._http.get(this._backendUrl).pipe(
      tap(_ => this.log('test')),
      catchError(this.handleError())
    );
  }

  private handleError<T>(operation = 'operation', result?: T){
    console.log("error");
    return null;
  }

  private log(message: string){
    console.log("log");
  }


}
