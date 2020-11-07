import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { IAsset } from 'src/app/models/asset.model';
import { AssetService } from 'src/app/services/asset/asset.service';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'sgs-asset-item',
  templateUrl: './asset-item.component.html',
  styleUrls: ['./asset-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssetItemComponent implements OnInit {
  asset: IAsset;
  image: string | ArrayBuffer;
  loadingImage = false;

  constructor(private assetService: AssetService, private store: Store<AppState>, private ref: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.store
      .select(state => state.company.selectedAsset)
      .subscribe(asset => {
        this.image = '';
        this.asset = asset;
        this.ref.markForCheck();
        if (asset) {
          this.loadImage(asset);
        }
      });
  }

  private loadImage(asset: IAsset) {
    // load async image
    this.loadingImage = true;
    this.assetService.getImage(asset.id).subscribe(image => {
      const reader = new FileReader();
      reader.addEventListener(
        'load',
        () => {
          this.image = reader.result;
          this.loadingImage = false;
          this.ref.markForCheck();
        },
        false
      );

      if (image) {
        reader.readAsDataURL(image);
      }
    });
  }
}
