export interface IUserState {
  companyIdSelected: number;
}

export const initializeState = (): IUserState => {
  return {
    companyIdSelected: null
  };
};
