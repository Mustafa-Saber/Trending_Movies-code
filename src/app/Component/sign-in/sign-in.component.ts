import { AuthService } from './../../auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  isWating: boolean = false;
  isSuccess: string = ``;
  constructor(private _AuthService: AuthService, private _Router: Router) {}

  ngOnInit(): void {}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z]{3,5}[0-9]{2,8}/),
    ]),
  });

  getFormData(loginForm: FormGroup) {
    this.isWating = true;
    this._AuthService.AuthUserLogin(loginForm.value).subscribe((respon) => {
      if (this.loginForm.status == 'VALID') {
        if (respon.message == 'success') {
          this.loginForm.reset();
          this.isWating = false;
          this.isSuccess = respon.message;
          setTimeout(() => {
            this.isSuccess = '';
          }, 10000);
          localStorage.setItem('userToken', respon.token);
          this._AuthService.saveUserData();
          this._Router.navigate(['/Trending', 'movies', 1]);
        } else {
          this.isSuccess = respon.message;
          this.isWating = false;
        }
      } else {
        this.isWating = false;
      }
    });
  }
}
