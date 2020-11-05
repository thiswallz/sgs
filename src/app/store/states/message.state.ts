import { MessageType } from 'src/app/models/message.model';

export interface IMessageState {
  type: MessageType;
  text: string;
}

export const initializeState = (): IMessageState => {
  return {
    type: null,
    text: null
  };
};
