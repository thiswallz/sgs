import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/core/auth.services';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let debugElement: DebugElement;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  const initialState = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule, ReactiveFormsModule],
      providers: [AuthService, FormBuilder, provideMockStore({ initialState })]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
    authService = debugElement.injector.get(AuthService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login after the user fills the form and press login', () => {
    const spyOnAuth = spyOn(authService, 'login').and.callThrough();

    const button = fixture.debugElement.nativeElement.querySelector('*[data-e2e-id=login]');
    const email = fixture.debugElement.nativeElement.querySelector('*[data-e2e-id=email]');
    const password = fixture.debugElement.nativeElement.querySelector('*[data-e2e-id=password]');
    email.value = 'email@y.com';
    password.value = '1234';
    email.dispatchEvent(new Event('input'));
    password.dispatchEvent(new Event('input'));
    button.click();

    expect(spyOnAuth).toHaveBeenCalled();
  });
});
