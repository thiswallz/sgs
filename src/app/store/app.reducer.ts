import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import * as fromMessage from './reducers/message.reducer';
import * as fromUser from './reducers/user.reducer';
import * as fromStatus from './reducers/status.reducer';
import * as fromCompany from './reducers/company.reducer';

export const reducers: ActionReducerMap<AppState, any> = {
  globalMessage: fromMessage.reducer,
  user: fromUser.reducer,
  status: fromStatus.reducer,
  company: fromCompany.reducer
};
