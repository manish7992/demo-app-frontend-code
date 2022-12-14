import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../model/user.model";
import {Observable} from "rxjs/index";
import {ApiResponse} from "../model/api.response";
import { AuthService } from './auth.service';

@Injectable({
  providedIn: "root"
})
export class ApiService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  
  baseUrlUser: string = this.authService.getBackendUrl + '/users/';
  baseUrlClaim: string = this.authService.getBackendUrl + '/claims/';

  login(loginPayload) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.authService.getBackendUrl + '/token/generate-token', loginPayload);
  }

  getUsers() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlUser);
  }

  getUserById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlUser + id);
  }

  createUser(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrlUser, user);
  }

  updateUser(user: User): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrlUser + user.id, user);
  }

  deleteUser(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrlUser + id);
  }

  getClaims() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlClaim);
  }

  getClaimById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrlClaim + id);
  }

  createClaim(claim: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrlClaim, claim);
  }

  updateClaim(claim: User): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrlClaim + claim.id, claim);
  }

  deleteClaim(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrlClaim + id);
  }
}
