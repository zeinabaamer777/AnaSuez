import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENDPOINT_URL } from '../config/globals';
import { Observable } from 'rxjs';

@Injectable()
export class Api {


  end_point_url: string;

 

  constructor(public http: HttpClient, public httpclient: HttpClient) {
    this.end_point_url = ENDPOINT_URL;

  }

  get(endpoint: string, params?: any, reqOpts?: any): Observable<any> {   
    return this.http.get(this.end_point_url + '/' + endpoint, params)
  } 

  post(endpoint: string, body: any, reqOpts?: any): Observable<any>  {
    return this.http.post(this.end_point_url + '/' +endpoint, body, reqOpts);
  }

  pathch(endpoint: string, body: any, reqOpts?: any): Observable<any>  {
    return this.http.patch(this.end_point_url + '/' +endpoint, body, reqOpts);
  }

  put(endpoint: string, body: any, reqOpts?: any): Observable<any>  {
    return this.http.put(this.end_point_url + '/' + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any): Observable<any>  {
    return this.http.delete(this.end_point_url + '/' + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any): Observable<any>  {
    return this.http.patch(this.end_point_url + '/' + endpoint, body, reqOpts);
  }
}