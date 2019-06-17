import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private authservice: AuthService, 
    private router: Router
  ) { }

  ngOnInit() {
  }

  user = {
    email: '',
    password: ''
 };

  // onClickGoogleLogin() {
  //   this.authservice.loginGoogle()
  //   .then((res) => {
  //     console.log(res);
  //   }).catch( err => console.log(err.message));
  // }

  signInWithEmail() {
    this.authservice.signInRegular(this.user.email, this.user.password)
       .then((res) => {
          console.log(res);
    
          this.router.navigate(['private']);
       })
       .catch((err) => console.log('error: ' + err));
  }

}
