import { IAsset } from 'src/app/models/asset.model';

export interface ICompanyState {
  loading: boolean;
  loaded: boolean;
  assets: IAsset[];
  selectedAsset: IAsset;
}

export const initializeState = (): ICompanyState => {
  return {
    loading: false,
    loaded: false,
    assets: [],
    selectedAsset: null
  };
};
