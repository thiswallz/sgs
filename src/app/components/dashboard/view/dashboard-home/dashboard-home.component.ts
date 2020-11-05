import { componentFactoryName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IUser } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/core/auth.services';
import * as userActions from 'src/app/store/actions/user.actions';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'sgs-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {
  userInfo: IUser;
  companyControl = new FormControl();
  constructor(private authenticationService: AuthService, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.initialize();
  }

  logout() {
    this.authenticationService.logout();
  }

  private initialize() {
    this.companyControl.valueChanges.subscribe(companyId => {
      console.log(companyId);
      this.store.dispatch(new userActions.SelectCompany(companyId));
    });
    this.loadUserInfo();
  }

  private loadUserInfo(): void {
    this.userInfo = this.authenticationService.getUserInfo();
    // TODO see if we preselect 1 company by default
    this.selectCompany(this.userInfo.roles[0].companyId);
  }

  private selectCompany(companyId: number) {
    this.companyControl.setValue(companyId, { emitEvent: true });
  }
}
