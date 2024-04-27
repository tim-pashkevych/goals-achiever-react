import { Icon } from '../Icon/Icon';
import { LoaderBtn } from '../LoaderBtn/LoaderBtn';
import { IconWrapper, SButton, buttonSizes } from './Button.styled';

// size = [small,medium,large,editProfile]
export const Button = ({
  title,
  icon = true,
  size = 'medium',
  onClick,
  type = 'submit',
  isLoading = false,
}) => {
  const iconSize = buttonSizes[size].iconSize;
  return (
    <SButton size={size} onClick={onClick} type={type} disabled={isLoading}>
      {!isLoading && (
        <>
          {title
            ? icon && (
                <IconWrapper>
                  <Icon id={'plus'} size={iconSize} color="white" />
                </IconWrapper>
              )
            : icon && <Icon id={'plus'} size={iconSize} color="black" />}
          {title}
        </>
      )}
      {isLoading && <LoaderBtn />}
    </SButton>
  );
};
