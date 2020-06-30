import { Injectable } from "@angular/core";
import { User, UserResponse } from "../models/user.model";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private heroesUrl = "http://localhost:8000/users";
  private users: User[];

  getUsers(): Observable<UserResponse> {
    return this.http.get<UserResponse>(this.heroesUrl);
  }
  constructor(private http: HttpClient) {}
}
