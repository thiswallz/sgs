import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/core/auth.services';

@Component({
  selector: 'sgs-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {
  userInfo: IUser;
  constructor(private authenticationService: AuthService) {}

  ngOnInit(): void {
    this.initialize();
  }

  logout() {
    this.authenticationService.logout();
  }

  private initialize() {
    this.loadUserInfo();
  }

  private loadUserInfo(): void {
    this.userInfo = this.authenticationService.getUserInfo();
  }
}
