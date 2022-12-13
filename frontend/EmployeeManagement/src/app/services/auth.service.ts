import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { map} from 'rxjs/operators';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getUserById(id: any) {
    throw new Error('Method not implemented.');
  }
  api_url: string = 'http://localhost:8000/';
  constructor(private http:HttpClient, private router:Router) { }
  
  register(val:any){
    return this.http.post(this.api_url + 'accounts/register/',val);
  }

  login(username: string, password: string){
    return this.http.post<any>(this.api_url + `accounts/api/auth/`,
     { username, password}, httpOptions).pipe(
       map(user =>{
        if(user && user.token){
           localStorage.setItem("currentUser", JSON.stringify(user));
        }
        return user;
       })
       );
  }
  logout(){
    localStorage.removeItem('token')
    this.router.navigate([''])
  }
  
}
