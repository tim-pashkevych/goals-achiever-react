import { Priority } from '../../types';

export enum ActionType {
  Edit = 'Edit',
  Add = 'Add',
}

export interface ICardPopupProps {
  actionType: ActionType;
  onSave: (result: IFormData) => void;
  cardData?: IFormData;
}

export interface IFormData {
  title: string;
  description: string;
  priority: Priority;
  deadline: string | number | Date;
}
