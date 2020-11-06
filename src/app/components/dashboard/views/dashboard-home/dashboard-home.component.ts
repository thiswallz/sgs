import { Component, OnInit } from '@angular/core';
import { HealthCheckService } from 'src/app/services/health-check/health-check.service';

@Component({
  selector: 'sgs-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {
  constructor(private healthCheckService: HealthCheckService) {}

  ngOnInit(): void {
    this.healthCheckService.checkHealthStatus();
  }
}
