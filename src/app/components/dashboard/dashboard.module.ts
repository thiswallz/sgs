import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHomeComponent } from './view/dashboard-home/dashboard-home.component';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToolbarComponent } from 'src/app/containers/toolbar/toolbar.component';

@NgModule({
  declarations: [DashboardHomeComponent, ToolbarComponent],
  imports: [CommonModule, DashboardRoutingModule, MatSelectModule, FormsModule, ReactiveFormsModule]
})
export class DashboardModule {}
