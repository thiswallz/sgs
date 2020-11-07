import * as fromMessage from './states/message.state';
import * as fromUser from './states/user.state';
import * as fromStatus from './states/status.state';
import * as fromCompany from './states/company.state';

export interface AppState {
  globalMessage: fromMessage.IMessageState;
  user: fromUser.IUserState;
  status: fromStatus.IStatusState;
  company: fromCompany.ICompanyState;
}

export const initialAppState: AppState = {
  globalMessage: fromMessage.initializeState(),
  user: fromUser.initializeState(),
  status: fromStatus.initializeState(),
  company: fromCompany.initializeState()
};

export function getInitialState(): AppState {
  return initialAppState;
}
