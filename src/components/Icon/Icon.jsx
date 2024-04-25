import { SIcon } from './Icon.slyled';
import Icons from '../../assets/sprite.svg';

// example:  <Icon id="plus" size={100} color="black" className="plus" />;

export const Icon = ({ id, size, color, className }) => {
  return (
    <SIcon width={size} height={size} color={color} className={className}>
      <use href={Icons + '#icon-' + id}></use>
    </SIcon>
  );
};
