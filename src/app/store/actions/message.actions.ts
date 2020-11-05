import { Action } from '@ngrx/store';

export enum ActionTypes {
  SendInfo = '[MESSAGE] Send info message',
  SendError = '[MESSAGE] Send error message'
}

export class SendMessageInfo implements Action {
  readonly type = ActionTypes.SendInfo;
  constructor(public payload: string) {}
}

export class SendMessageError implements Action {
  readonly type = ActionTypes.SendError;
  constructor(public payload: string) {}
}

export type MessageActions = SendMessageInfo | SendMessageError;
