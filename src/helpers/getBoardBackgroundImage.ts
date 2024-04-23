import { Device } from '../types';

export const getBoardBackgroundImage = (
  imageIndex: number,
  device: Device,
  retina: boolean
) => {
  return `../assets/images/boards/${device}/${imageIndex + 1}-${device}${
    retina ? '@2x' : ''
  }.png`;
};
