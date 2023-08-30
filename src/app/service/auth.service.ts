import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { 

  }


 

  apiurl='https://api.pokecomet.net/user';

  registerUser(inputdata:any){
    return this.http.post(this.apiurl,inputdata)
  }
  getUserByID(id:any){
    return this.http.get(this.apiurl+'/'+id);
  }
  getAll(){
    return this.http.get(this.apiurl);
  }
  updateUser(id:any,inputdata:any){
    return this.http.put(this.apiurl+'/'+id,inputdata);
  }
  getUserRole(){
    return this.http.get('https://api.pokecomet.net/role')
  }
  isLoggedIN(){
    return sessionStorage.getItem('username')!=null;
  }
  isAdmin(){
    return sessionStorage.getItem('role')=='admin';
  }
  getRole(){
    return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString():'';
  }
  getAccessbyRole(role:any,menu:any){
    return this.http.get('https://api.pokecomet.net/roleaccess?role='+role+'&menu='+menu);
  }
  getTokens(id:any){
    return this.http.get('https://api.pokecomet.net/user/'+id).pipe(
      map((response: any) => response.tokens)
    );
  }

  addTokens(id: any, tokenAmount: any): Observable<any> {
    const updateData = { tokens: tokenAmount };
    return this.http.patch('https://api.pokecomet.net/user/' + id, updateData);
  }

  removeTokens(id: any, tokenAmount: any): Observable<any> {
    const updateData = { tokens: tokenAmount };
    return this.http.patch('https://api.pokecomet.net/user/' + id, updateData);
  }



  logOut(){
    sessionStorage.clear();
  }
  
}