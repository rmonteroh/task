import { Injectable } from '@angular/core';
import { map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RequesterService {

  constructor(private http: HttpClient) { }

  loggedIn() {
    return !!sessionStorage.getItem('user');
  }
  logout(){
    sessionStorage.removeItem('user');
  }

  getTasks() {
    const url = environment.mailUrl;
    return this.http.get(`${url}/todos`).pipe(
      map( (resp: any) => {
        if ( resp.length > 0) {
          return resp = resp.filter(item => item.userId === 1);
        } else {
          return false;
        }
      })
    );
   }
   getOneTasks(id){
    const url = environment.mailUrl;
    return this.http.get(`${url}/todos/${id}`).pipe(
      map( (resp: any) => {
        if ( resp) {
          return resp;
        } else {
          return false;
        }
      })
    );
   }
}
