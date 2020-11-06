import { Action } from '@ngrx/store';

export enum ActionTypes {
  SelectCompany = '[USER] Select a company'
}

export class SelectCompany implements Action {
  readonly type = ActionTypes.SelectCompany;
  constructor(public payload: number) {}
}
export type UserActions = SelectCompany;
