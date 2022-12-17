import {Injectable} from '@angular/core'
import {BehaviorSubject, Observable} from 'rxjs'
import { JwtHelperService } from '@auth0/angular-jwt';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class AuthService {
    userInfo:BehaviorSubject<any> = new BehaviorSubject(null);
    jwtHelper = new JwtHelperService();

   constructor(private http:HttpClient){
    this.loadUserInfo();

   }
   
   loadUserInfo(){
    const userdata = this.userInfo.getValue();
    if(!userdata){

        const accesstoken = localStorage.getItem("access_token");

        if(accesstoken){

            const decryptedUser = this.jwtHelper.decodeToken(accesstoken);
        console.log(decryptedUser);
        const data = {
            access_token: accesstoken,
            refresh_token: localStorage.getItem("refresh_token"),
            username: decryptedUser.username,
            userid: decryptedUser.sub,
            tokenExpiration: decryptedUser.exp,
        };
        this.userInfo.next(data);
       }

      }

   }

    userLogin(userPayload:any):Observable<boolean> {
     return this.http.post("http://localhost:3000/auth/login", userPayload)
     .pipe(
        map((value:any) => {
            if(value){
                localStorage.setItem("access_token", value.access_token);
        localStorage.setItem("refresh_token", value.refresh_token);
        const decryptedUser = this.jwtHelper.decodeToken(value.access_token);
        console.log(decryptedUser);


        const data = {
            access_token: value.access_token,
            refresh_token: value.refresh_token,
            username: decryptedUser.username,
            userid: decryptedUser.sub,
            tokenExpiration: decryptedUser.exp,
        };

        this.userInfo.next(data); 
        return true;
            }
            return false
        }));
    }

    getTodos():Observable<any>{
        return this.http.get('http://localhost:3000/todos');

    }

 callRefreshToken(tokenPayload: any):Observable<any>{
    return this.http.post('http://localhost:3000/auth/refreshtoken',tokenPayload);
 }
}