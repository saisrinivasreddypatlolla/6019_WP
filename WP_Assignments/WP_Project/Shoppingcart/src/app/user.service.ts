import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
    this.getUsers();
   }
  users: any;
  isLoggedIn: boolean;
  
  getUsers():Observable<any> {
    console.log('Reached get users');
    this.users = this.http.get('http://127.0.0.1:3000/getusers');
    this.users.subscribe(temp => console.log(temp));
    // console.log(this.users);
    return this.users;
  }

  validate(item: any) {
    console.log(item);
    const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');
    // this.http.post('http://127.0.0.1:3000/userlogin',item, {
    //   headers: headers
    // }).subscribe(next ()=> console.log(next));
    return this.http.post('http://127.0.0.1:3000/userlogin',item, {headers : headers});
    // console.log(this.isLoggedIn);
  }

  adduser(item:any) {
    console.log(item);
    const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');
    this.http.post('http://127.0.0.1:3000/adduser',item, {
      headers: headers
    }).subscribe(next => console.log(next));
  }
}
