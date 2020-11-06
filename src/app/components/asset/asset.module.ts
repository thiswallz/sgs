import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetListComponent } from './views/asset-list/asset-list.component';
import { AssetItemComponent } from './views/asset-item/asset-item.component';
import { SubscribePipe } from 'src/app/pipes/subscribe.pipe';

@NgModule({
  declarations: [AssetListComponent, AssetItemComponent, SubscribePipe],
  exports: [AssetListComponent],
  imports: [CommonModule]
})
export class AssetModule {}
