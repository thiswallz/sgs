import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { AppState } from './store/app.state';

@Component({
  selector: 'sgs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sigsense-app';

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store
      .select(state => state.globalMessage)
      .pipe(filter(message => !!message?.text))
      .subscribe(message => {
        // FIXME change for toast or something
        alert(message.text);
      });
  }
}
