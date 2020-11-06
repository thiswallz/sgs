import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AppComponent } from './app.component';
import { AuthService } from './services/core/auth/auth.services';

describe('AppComponent', () => {
  beforeEach(async(() => {
    let service: AuthService;
    let store: MockStore;
    const initialState = {};
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [AppComponent],
      providers: [AuthService, provideMockStore({ initialState })]
    }).compileComponents();
    service = TestBed.inject(AuthService);
    store = TestBed.inject(MockStore);
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
