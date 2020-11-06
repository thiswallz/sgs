import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IUser } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/core/auth/auth.services';
import * as messageActions from 'src/app/store/actions/message.actions';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'sgs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  loading = false;

  constructor(
    private readonly formBuilder: FormBuilder,
    private authenticationService: AuthService,
    private readonly router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  login() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    this.authenticationService.login(this.form.value.email, this.form.value.password).subscribe(
      (user: IUser) => {
        this.authenticationService.setUserInfo(user);
        this.router.navigate(['/dashboard']);
      },
      err => {
        this.loading = false;
        this.store.dispatch(new messageActions.SendMessageError(err.message));
      },
      () => {
        this.loading = false;
      }
    );
  }

  // shortcut
  get f() {
    return this.form.controls;
  }
}
