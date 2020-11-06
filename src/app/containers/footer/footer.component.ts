import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'sgs-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  connected = true;
  version = environment.version;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select(state => state.status.connected)
      .subscribe(connected => {
        this.connected = connected;
      });
  }
}
