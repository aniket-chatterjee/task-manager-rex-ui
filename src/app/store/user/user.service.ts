import { Injectable } from "@angular/core";
import { User, UserResponse } from "./user.model";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private userUrl = `${environment.baseUrl}/users/`;
  private users: User[];

  getUsers(): Observable<UserResponse> {
    return this.http.get<UserResponse>(this.userUrl);
  }
  constructor(private http: HttpClient) {}
}
