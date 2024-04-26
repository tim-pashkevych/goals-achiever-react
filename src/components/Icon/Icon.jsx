import { SIcon } from './Icon.slyled';
import Icons from '../../assets/sprite.svg';

// example:  <Icon id="plus" size={100} color="black" className="plus" />;

export const Icon = ({ id, size, color, stroke, fill, className }) => {
  return (
    <SIcon
      width={size}
      height={size}
      color={color}
      stroke={stroke}
      fill={fill}
      className={className}
    >
      <use href={Icons + '#icon-' + id}></use>
    </SIcon>
  );
};
