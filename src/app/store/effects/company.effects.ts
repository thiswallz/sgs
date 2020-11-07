import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { forkJoin, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AssetService } from 'src/app/services/asset/asset.service';
import * as companyActions from 'src/app/store/actions/company.actions';

@Injectable()
export class CompanyEffects {
  constructor(private actions$: Actions, private assetService: AssetService) {}
  @Effect()
  loadAssets$: Observable<Action> = this.actions$.pipe(
    ofType(companyActions.ActionTypes.LoadAssets),
    switchMap((action: companyActions.LoadAssets) => {
      return forkJoin(
        action.paths.map(path => {
          return this.assetService.getDetail(path);
        })
      ).pipe(
        map(assets => {
          return new companyActions.AssetsLoaded(assets);
        })
      );
    })
  );
}
