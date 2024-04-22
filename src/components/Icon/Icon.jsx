import { StyledIcon } from './Icon.slyled';
import Icons from '../../assets/sprite.svg';

// example:  <Icon id="plus" size={100} color="black" />;

export const Icon = ({ id, size, color }) => {
  return (
    <StyledIcon width={size} height={size} color={color}>
      <use href={Icons + '#icon-' + id}></use>
    </StyledIcon>
  );
};
