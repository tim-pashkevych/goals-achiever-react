import { Priority } from '../types';

export const PriorityColor = {
  [Priority.WithoutPriority]: 'rgba(255, 255, 255, 0.3)',
  [Priority.Low]: '#8FA1D0',
  [Priority.Medium]: '#E09CB5',
  [Priority.High]: '#BEDBB0',
};
