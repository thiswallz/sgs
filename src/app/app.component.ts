import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { MessageType } from './models/message.model';
import { AppState } from './store/app.state';

@Component({
  selector: 'sgs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sigsense-app';

  constructor(private store: Store<AppState>, private _snackBar: MatSnackBar) {}

  ngOnInit() {
    this.store
      .select(state => state.globalMessage)
      .pipe(filter(message => !!message?.text))
      .subscribe(message => {
        // FIXME change for toast or something
        if (message.type === MessageType.Error) {
          this._snackBar.open(`⛔ ${message.text}`, '', {
            duration: 4000
          });
        } else {
          this._snackBar.open(message.text, '', {
            duration: 2000
          });
        }
      });
  }
}
