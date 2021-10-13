import { Injectable } from '@angular/core'
import {User} from '../user/user'
import {Observable, of} from 'rxjs'
import {HttpClient} from '@angular/common/http'
import {catchError, map, tap} from "rxjs/operators";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = `${environment.apiUrl}/user`

  constructor(
    private http: HttpClient
  ) { }

  getUser(userId: Number): Observable<User> {
    return this.http
      .get<User>(`${this.userUrl}/${userId}`)
      .pipe(
        tap( res => res)
      )

  }

  getUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(this.userUrl)
      .pipe(
        map(response => response['data'])
      )
  }

}
