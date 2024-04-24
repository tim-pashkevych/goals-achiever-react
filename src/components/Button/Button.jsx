import { Icon } from '../Icon/Icon';
import { IconWrapper, SButton, buttonSizes } from './Button.styled';

// size = [small,medium,large,editProfile]
export const Button = ({
  title,
  icon = true,
  size = 'medium',
  onClick,
  type = 'submit',
}) => {
  const iconSize = buttonSizes[size].iconSize;
  return (
    <SButton size={size} onClick={onClick} type={type}>
      {title
        ? icon && (
            <IconWrapper>
              <Icon id={'plus'} size={iconSize} color="white" />
            </IconWrapper>
          )
        : icon && <Icon id={'plus'} size={iconSize} color="black" />}
      {title}
    </SButton>
  );
};
