import * as fromMessage from './states/message.state';
import * as fromUser from './states/user.state';

export interface AppState {
  globalMessage: fromMessage.IMessageState;
  user: fromUser.IUserState;
}

export const initialAppState: AppState = {
  globalMessage: fromMessage.initializeState(),
  user: fromUser.initializeState()
};

export function getInitialState(): AppState {
  return initialAppState;
}
