import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
// import { LocalStorageService } from './local-storage.service';
import { LOCAL_STORAGE_CONSTANTS } from '../constants/local-storage.constant';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  private apiEndPoint: String = environment.serverApiUrl

  constructor(
    private httpclient: HttpClient,
    private localStorageService: LocalStorageService
  ) { }

  get(url, params): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'access_token': this.localStorageService.get(LOCAL_STORAGE_CONSTANTS.UID_TOKEN)
      }),
      params: params
    };
    return this.httpclient.get(`${this.apiEndPoint}${url}`, httpOptions);
  }

  post(url, data): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': this.localStorageService.get(LOCAL_STORAGE_CONSTANTS.UID_TOKEN)
      })
    };
    return this.httpclient.post(`${this.apiEndPoint}${url}`, data, httpOptions);
  }

  put(url, data, params): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': this.localStorageService.get(LOCAL_STORAGE_CONSTANTS.UID_TOKEN)
      }),
      params: params
    };
    return this.httpclient.put(`${this.apiEndPoint}${url}`, data, httpOptions);
  }

  delete(url, params): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': this.localStorageService.get(LOCAL_STORAGE_CONSTANTS.UID_TOKEN)
      }),
      params: params
    };
    return this.httpclient.delete(`${this.apiEndPoint}${url}`, httpOptions);
  }

}
