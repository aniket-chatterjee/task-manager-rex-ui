import { Injectable } from "@angular/core";
import { AuthResponse, LoginInput, SignupInput } from "./auth.model";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private authTokenUrl = `${environment.baseUrl}/token`;
  private authSignupUrl = `${environment.baseUrl}/signup`;
  private authUrlRefreshUrl = `${environment.baseUrl}/token`;
  private authUrlVerifyUrl = `${environment.baseUrl}/verify`;

  login(loginData: LoginInput): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.authTokenUrl, loginData);
  }

  signup(signupData: SignupInput): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.authSignupUrl, signupData);
  }

  refreshToken(signupData: SignupInput): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.authTokenUrl, signupData);
  }

  verifyToken(signupData: SignupInput): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.authTokenUrl, signupData);
  }
  constructor(private http: HttpClient) {}
}
