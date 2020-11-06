import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetListComponent } from './views/asset-list/asset-list.component';
import { AssetItemComponent } from './views/asset-item/asset-item.component';

@NgModule({
  declarations: [AssetListComponent, AssetItemComponent],
  exports: [AssetListComponent],
  imports: [CommonModule]
})
export class AssetModule {}
