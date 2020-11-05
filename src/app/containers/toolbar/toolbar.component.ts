import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IUser } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/core/auth.services';
import * as userActions from 'src/app/store/actions/user.actions';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'sgs-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  userInfo: IUser;
  companyControl = new FormControl();

  constructor(private store: Store<AppState>, private authenticationService: AuthService) {}

  ngOnInit(): void {
    this.companyControl.valueChanges.subscribe(companyId => {
      this.store.dispatch(new userActions.SelectCompany(companyId));
    });
    this.userInfo = this.authenticationService.getUserInfo();
    // TODO see if we preselect 1 company by default
    this.selectCompany(this.userInfo.roles[0].companyId);
  }

  private selectCompany(companyId: number) {
    this.companyControl.setValue(companyId, { emitEvent: true });
  }
}
