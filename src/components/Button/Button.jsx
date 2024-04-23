import { Icon } from '../Icon/Icon';
import { IconWrapper, SButton } from './Button.styled';

export const Button = ({ title, icon, size = 'medium' }) => {
  const iconSize = size === 'small' ? 20 : 14;

  return (
    <SButton size={size}>
      {title ? (
        <IconWrapper>
          <Icon id={'plus'} size={iconSize} color="white" />
        </IconWrapper>
      ) : (
        icon && <Icon id={'plus'} size={iconSize} color="black" />
      )}
      {title}
    </SButton>
  );
};
