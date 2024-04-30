import { Loader } from '../Loader/Loader';
import { useAppSelector } from '../../hooks';
import { selectIsBoardLoading, selectIsUserLoading } from '../../redux';

import { SButton, SDiv, SDiv_Button, Sp } from './ConfirmationPopup.styled';

export const ConfirmationPopup = ({
  closeModal,
  approveModal,
  action,
  logout = false,
}) => {
  const isLoading = useAppSelector(selectIsBoardLoading);
  const isLoadingUser = useAppSelector(selectIsUserLoading);

  return (
    <SDiv>
      <Sp>Are you sure you want to {action}?</Sp>
      <SDiv_Button>
        <SButton type="button" onClick={approveModal} disabled={isLoading}>
          {logout ? 'Log out' : 'Yes'}
        </SButton>
        <SButton type="button" onClick={() => closeModal()}>
          Cancel
        </SButton>
      </SDiv_Button>
      {(isLoading || isLoadingUser) && <Loader />}
    </SDiv>
  );
};
