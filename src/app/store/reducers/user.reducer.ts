import { ActionTypes, UserActions } from '../actions/user.actions';
import { initializeState } from '../states/user.state';

export function reducer(state = initializeState(), action: UserActions) {
  switch (action.type) {
    case ActionTypes.SelectCompany:
      return {
        ...state,
        companyIdSelected: action.payload
      };
    default:
      return state;
  }
}
