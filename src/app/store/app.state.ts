import * as fromMessage from './states/message.state';

export interface AppState {
  globalMessage: fromMessage.IMessageState;
}

export const initialAppState: AppState = {
  globalMessage: fromMessage.initializeState()
};

export function getInitialState(): AppState {
  return initialAppState;
}
