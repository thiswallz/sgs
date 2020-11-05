import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import * as fromMessage from './reducers/message.reducer';

export const reducers: ActionReducerMap<AppState, any> = {
  globalMessage: fromMessage.reducer
};
