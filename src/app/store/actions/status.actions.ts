import { Action } from '@ngrx/store';

export enum ActionTypes {
  UpdateStatus = '[STATUS] Update status'
}

export class UpdateConnection implements Action {
  readonly type = ActionTypes.UpdateStatus;
  constructor(public payload: boolean) {}
}

export type StatusActions = UpdateConnection;
