import { Loader } from '../Loader/Loader';
import { SButton, SDiv, SDiv_Button, Sp } from './ConfirmationPopup.styled';

export const ConfirmationPopup = ({
  closeModal,
  approveModal,
  isLoading,
  action,
  logout = false,
}) => {
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
      {isLoading && <Loader />}
    </SDiv>
  );
};
