import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {Observable} from "rxjs";
import { Router } from '@angular/router';

import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})


export class ServicesService {

  tempData:any;
  
  apiUrl = environment.apiUrl;
  url: string;
  tokenVal:any='';
  constructor(private _http: HttpClient, private router:Router) {
    this.url  = 'https://api.datamuse.com/words?ml=';
  }

  postRequest(param,route,token):Observable<{}> {
    const data = {};
    const header = new HttpHeaders();
    const other_headers = header.append('Authorization','Bearer ' + token);

    return this._http.post<{}>(this.apiUrl+ '/' + route, param, { headers:other_headers });
  }

  getRequest(route):Observable<{}> {
    return this._http.get<{}>(this.apiUrl+ '/' + route);
  }

  deleteRequest(id, route, token): Observable<{}> {
    const header        = new HttpHeaders();
    const other_header  = header.append('Content-Type', 'application/json');
    return this._http.delete<{}>(this.apiUrl + '/' + route + '/' + id);
  }

  updateRequest(id, param, route, token): Observable<{}> {
    const header        = new HttpHeaders();
    const other_header  = header.append('Content-Type', 'application/json');
    return this._http.put<{}>(this.apiUrl + '/' + route + '/' + id, param, {headers : other_header});
  }
}

