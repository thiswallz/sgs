import * as fromMessage from './states/message.state';
import * as fromUser from './states/user.state';
import * as fromStatus from './states/status.state';

export interface AppState {
  globalMessage: fromMessage.IMessageState;
  user: fromUser.IUserState;
  status: fromStatus.IStatusState;
}

export const initialAppState: AppState = {
  globalMessage: fromMessage.initializeState(),
  user: fromUser.initializeState(),
  status: fromStatus.initializeState()
};

export function getInitialState(): AppState {
  return initialAppState;
}
