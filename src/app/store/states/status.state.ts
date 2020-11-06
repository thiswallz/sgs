export interface IStatusState {
  connected: boolean;
}

export const initializeState = (): IStatusState => {
  return {
    connected: true
  };
};
