import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { ToolbarComponent } from 'src/app/containers/toolbar/toolbar.component';
import { DashboardAssetsComponent } from './views/dashboard-assets/dashboard-assets.component';
import { DashboardHomeComponent } from './views/dashboard-home/dashboard-home.component';
import { AssetModule } from '../asset/asset.module';

@NgModule({
  declarations: [DashboardHomeComponent, DashboardAssetsComponent, ToolbarComponent],
  imports: [CommonModule, DashboardRoutingModule, MatSelectModule, FormsModule, ReactiveFormsModule, AssetModule]
})
export class DashboardModule {}
