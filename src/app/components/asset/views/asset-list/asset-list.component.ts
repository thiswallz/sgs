import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as messageActions from 'src/app/store/actions/message.actions';
import * as companyActions from 'src/app/store/actions/company.actions';
import { IAsset } from 'src/app/models/asset.model';
import { ICompanyAsset } from 'src/app/models/company.model';
import { AppState } from 'src/app/store/app.state';
import { filter } from 'rxjs/operators';

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

  constructor(private ref: ChangeDetectorRef, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select(state => state.company)
      .pipe(filter(company => !!company))
      .subscribe(company => {
        this.loading = company.loading;
        this.assets = company.assets;
        this.ref.markForCheck();
      });
  }

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
    this.store.dispatch(new companyActions.LoadAssets(companyAsset.items));
  }
}
