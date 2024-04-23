import { Icon } from '../Icon/Icon';
import { IconWrapper, SButton } from './Button.styled';

export const Button = ({ title, icon = true, size = 'medium', onClick }) => {
  const iconSize = size === 'small' ? 20 : 14;
  return (
    <SButton size={size} onClick={onClick}>
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
