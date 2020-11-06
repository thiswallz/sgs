import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { ToolbarComponent } from 'src/app/containers/toolbar/toolbar.component';
import { DashboardAssetsComponent } from './views/dashboard-assets/dashboard-assets.component';
import { DashboardHomeComponent } from './views/dashboard-home/dashboard-home.component';
import { FooterComponent } from 'src/app/containers/footer/footer.component';
import { AssetModule } from '../asset/asset.module';
import { SubscribePipe } from 'src/app/pipes/subscribe.pipe';

@NgModule({
  declarations: [DashboardHomeComponent, DashboardAssetsComponent, ToolbarComponent, FooterComponent],
  imports: [CommonModule, DashboardRoutingModule, MatSelectModule, FormsModule, ReactiveFormsModule, AssetModule]
})
export class DashboardModule {}
