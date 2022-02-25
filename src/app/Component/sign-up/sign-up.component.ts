import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  isSuccess: string = '';
  isUniuqeEmail: string = '';
  isWating: boolean = false;
  registerForm: FormGroup = new FormGroup({
    first_name: new FormControl(null, [
      Validators.minLength(3),
      Validators.maxLength(22),
      Validators.required,
    ]),
    last_name: new FormControl(null, [
      Validators.minLength(3),
      Validators.maxLength(22),
      Validators.required,
    ]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [
      Validators.pattern(`^[A-Z][a-z]{3,5}[0-9]{2,8}`),
      Validators.required,
    ]),
    age: new FormControl(null, [
      Validators.min(18),
      Validators.max(80),
      Validators.required,
    ]),
  });
  constructor(public _AuthService: AuthService) {}

  ngOnInit(): void {}
  getFormData(registerForm: FormGroup) {
    this.isWating = true;
    this._AuthService.AuthUser(registerForm.value).subscribe((data) => {
      if (this.registerForm.status == 'VALID') {
        if (data.message == 'success') {
          this.registerForm.reset();
          this.isSuccess = data.message;
          this.isWating = false;

          setTimeout(() => {
            this.isSuccess = '';
          }, 100000);
        } else {
          this.isSuccess = data.message;
          this.isWating = false;
        }
      } else {
        this.isWating = false;
      }
    });
  }
}
