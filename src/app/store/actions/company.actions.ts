import { Action } from '@ngrx/store';
import { IAsset } from 'src/app/models/asset.model';

export enum ActionTypes {
  LoadAssets = '[COMPANY] Load assets',
  AssetsLoaded = '[COMPANY] Assets Loaded',
  SelectAsset = '[COMPANY] Select Asset'
}

export class LoadAssets implements Action {
  readonly type = ActionTypes.LoadAssets;
  constructor(public paths: string[]) {}
}

export class AssetsLoaded implements Action {
  readonly type = ActionTypes.AssetsLoaded;
  constructor(public payload: IAsset[]) {}
}

export class SelectAsset implements Action {
  readonly type = ActionTypes.SelectAsset;
  constructor(public payload: IAsset) {}
}

export type CompaniesActions = LoadAssets | AssetsLoaded | SelectAsset;
