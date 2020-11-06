import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { CompanyService } from 'src/app/services/company/company.service';
import { ICompanyAsset } from 'src/app/models/company.model';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'sgs-dashboard-assets',
  templateUrl: './dashboard-assets.component.html',
  styleUrls: ['./dashboard-assets.component.scss']
})
export class DashboardAssetsComponent implements OnInit {
  companyAsset: ICompanyAsset;

  constructor(private companyService: CompanyService, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select(state => state.user.companyIdSelected)
      .pipe(filter(id => !!id))
      .subscribe(companyIdSelected => {
        this.companyService.getAssets(companyIdSelected).subscribe(companyAsset => {
          this.companyAsset = companyAsset;
        });
      });
  }
}
