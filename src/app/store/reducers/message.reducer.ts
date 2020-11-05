import { MessageType } from 'src/app/models/message.model';
import { ActionTypes, MessageActions } from '../actions/message.actions';
import { initializeState } from '../states/message.state';

export function reducer(state = initializeState(), action: MessageActions) {
  switch (action.type) {
    case ActionTypes.SendInfo:
      return {
        ...state,
        type: MessageType.Info,
        text: action.payload
      };
    case ActionTypes.SendError:
      return {
        ...state,
        type: MessageType.Error,
        text: action.payload
      };
    default:
      return state;
  }
}
