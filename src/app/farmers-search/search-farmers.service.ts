import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class SearchFarmersService {
  query: string
  baseUrl: string ='http://192.168.0.42:4000/farmers?farmerName='
  constructor(private http: Http) { }

  search(query: String){
    return this.http.get(this.baseUrl + query).map(res => res.json());
  }
    
}
