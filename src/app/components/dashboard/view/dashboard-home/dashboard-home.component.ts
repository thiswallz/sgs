import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/core/auth.services';

@Component({
  selector: 'sgs-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {
  constructor(private authenticationService: AuthService) {}

  ngOnInit(): void {}

  logout() {
    this.authenticationService.logout();
  }
}
