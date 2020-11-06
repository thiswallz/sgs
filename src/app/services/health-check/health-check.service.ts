import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { interval } from 'rxjs';
import * as statusActions from 'src/app/store/actions/status.actions';
import { AppState } from 'src/app/store/app.state';
import { environment } from 'src/environments/environment';

const CHECK_INTERVAL_MS = 2000;

@Injectable({
  providedIn: 'root'
})
export class HealthCheckService {
  constructor(private readonly http: HttpClient, private store: Store<AppState>) {}

  checkHealthStatus() {
    interval(CHECK_INTERVAL_MS).subscribe(async () => {
      // since we dont have an actuator endpoint to check, I jsut point to whatever endpoint
      await this.http.get(`${environment.restApi}`, { responseType: 'text' }).subscribe(
        ping => {
          this.store.dispatch(new statusActions.UpdateConnection(true));
        },
        () => {
          this.store.dispatch(new statusActions.UpdateConnection(false));
        }
      );
    });
  }
}
