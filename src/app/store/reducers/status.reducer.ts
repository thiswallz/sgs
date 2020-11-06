import { ActionTypes, StatusActions } from '../actions/status.actions';
import { initializeState } from '../states/status.state';

export function reducer(state = initializeState(), action: StatusActions) {
  switch (action.type) {
    case ActionTypes.UpdateStatus:
      return {
        ...state,
        connected: action.payload
      };
    default:
      return state;
  }
}
