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
  priority: string;
  deadline: string;
}
