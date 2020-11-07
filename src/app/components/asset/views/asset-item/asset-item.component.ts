import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAsset } from 'src/app/models/asset.model';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'sgs-asset-item',
  templateUrl: './asset-item.component.html',
  styleUrls: ['./asset-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssetItemComponent implements OnInit {
  asset: IAsset;

  constructor(private store: Store<AppState>, private ref: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.store
      .select(state => state.company.selectedAsset)
      .subscribe(asset => {
        this.asset = asset;
        this.ref.markForCheck();
      });
  }
}
