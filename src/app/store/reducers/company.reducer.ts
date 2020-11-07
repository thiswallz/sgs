import { ActionTypes, CompaniesActions } from '../actions/company.actions';
import { initializeState } from '../states/company.state';

export function reducer(state = initializeState(), action: CompaniesActions) {
  switch (action.type) {
    case ActionTypes.LoadAssets:
      return {
        ...state,
        loaded: false,
        loading: true,
        assets: [],
        selectedAsset: null
      };
    case ActionTypes.AssetsLoaded:
      return {
        ...state,
        loaded: true,
        loading: false,
        assets: action.payload
      };
    case ActionTypes.SelectAsset:
      return {
        ...state,
        selectedAsset: action.payload
      };
    default:
      return state;
  }
}
