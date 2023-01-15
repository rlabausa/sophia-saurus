import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject, Subject } from 'rxjs';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUser$: ReplaySubject<User> = new ReplaySubject<User>(1); 

  constructor(
    private httpClient: HttpClient
  ) { }
}
