import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { forkJoin } from 'rxjs';
import * as messageActions from 'src/app/store/actions/message.actions';
import { AssetService } from 'src/app/services/asset/asset.service';
import { IAsset } from 'src/app/models/asset.model';
import { ICompanyAsset } from 'src/app/models/company.model';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'sgs-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssetListComponent implements OnInit, OnChanges {
  @Input() companyAsset: ICompanyAsset;
  assets: IAsset[];
  loading: boolean;

  constructor(private assetService: AssetService, private ref: ChangeDetectorRef, private store: Store<AppState>) {}

  ngOnInit(): void {}

  ngOnChanges() {
    if (this.companyAsset) {
      this.assets = [];
      this.loadAssets(this.companyAsset);
    }
  }

  private loadAssets(companyAsset: ICompanyAsset): void {
    if (this.companyAsset.items.length <= 0) {
      this.store.dispatch(new messageActions.SendMessageError('No items'));
      return;
    }
    this.loading = true;
    forkJoin(
      companyAsset.items.map(path => {
        return this.assetService.getDetail(path);
      })
    ).subscribe(results => {
      this.assets = results;
      this.loading = false;
      this.ref.markForCheck();
    });
  }
}
