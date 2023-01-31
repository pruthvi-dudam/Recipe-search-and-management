import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControlOptions,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  PasswordValidator,
  UserNameValidator,
} from '../shared/validators/validators';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  oldUserInfoForm: FormGroup;
  newUserInfoForm: FormGroup;
  isSignin: boolean = true;
  isNew: boolean = false;
  userNotfound: boolean = false;
  passwordIncorrect: boolean = false;
  show: boolean = false;
  hidden: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.oldUserInfoForm = this.fb.group({
      userName: ['', [Validators.required, UserNameValidator.valid]],
      password: ['', [Validators.required, PasswordValidator.valid]],
    } as AbstractControlOptions);

    this.newUserInfoForm = this.fb.group({
      userName: ['', [Validators.required, UserNameValidator.valid]],
      password: ['', [Validators.required, PasswordValidator.valid]],
    } as AbstractControlOptions);

    console.log(localStorage);
  }

  login() {
    if (!(this.oldUserInfoForm.controls.userName.value in localStorage)) {
      this.userNotfound = true;
      this.passwordIncorrect = false;
    } else if (
      localStorage.getItem(this.oldUserInfoForm.controls.userName.value) !=
      this.oldUserInfoForm.controls.password.value
    ) {
      this.passwordIncorrect = true;
      this.userNotfound = false;
    } else {
      sessionStorage.setItem(
        'user',
        this.oldUserInfoForm.controls.userName.value
      );
      this.router.navigate(['app/home']);
    }

    console.log(this.userNotfound);
  }

  newUser() {
    localStorage.setItem(
      this.newUserInfoForm.controls.userName.value,
      this.newUserInfoForm.controls.password.value
    );
    sessionStorage.setItem(
      'newUser',
      this.newUserInfoForm.controls.userName.value
    );
    this.router.navigate(['app/home']);

    console.log(
      this.newUserInfoForm.controls.userName.value +
        ' : ' +
        this.newUserInfoForm.controls.password.value
    );
  }

  clickSignIn() {
    this.isSignin = true;
    this.isNew = false;
    console.log('sn-' + this.isSignin + ' n- ' + this.isNew);
  }
  clickNew() {
    this.isNew = true;
    this.isSignin = false;
    console.log('sn-' + this.isSignin + ' n- ' + this.isNew);
  }

  showPassword() {
    this.show = !this.show;
  }
}
