import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { environment } from 'src/environments/environment';

export enum Theme {
  Dark = 'DARK',
  Light = 'LIGHT'
}

@Component({
  selector: 'sgs-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  connected = true;
  version = environment.version;
  theme = Theme.Dark;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select(state => state.status.connected)
      .subscribe(connected => {
        this.connected = connected;
      });
  }

  // TODO save on localstorage
  changeTheme() {
    if (this.theme === Theme.Dark) {
      this.theme = Theme.Light;
    } else {
      this.theme = Theme.Dark;
    }
    document.body.setAttribute('data-theme', this.theme);
  }
}
