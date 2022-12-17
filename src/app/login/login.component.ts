import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  templateUrl: './login.component.html',
})
export class LoginComponent {
    constructor(private authService:AuthService,
      private route:Router){}

    loginData = {
        username: '',
        password: ''
  }; 
 
  userLogin() {

      this.authService.userLogin(this.loginData)
      .subscribe((value:boolean) =>{
        if(value){
          this.route.navigate(['/dashboard']);
        }
        else{
          alert('failed')
        }
        },error => {
        alert('failed')
      })
      
  } 
}

function subscribe(arg0: (value: boolean) => void, arg1: (error: any) => void) {
  throw new Error('Function not implemented.');
}
