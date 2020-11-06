import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/core/auth/auth.services';

@Component({
  selector: 'sgs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(private readonly formBuilder: FormBuilder, private authenticationService: AuthService) {}

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
    this.authenticationService.login(this.form.value.email, this.form.value.password);
  }

  // shortcut
  get f() {
    return this.form.controls;
  }
}
