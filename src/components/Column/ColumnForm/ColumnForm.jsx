import { EditColumn } from '../../EditColumn/EditColumn';
import { Modal } from '../../Modal/Modal';

export const ColumnForm = ({ toggleModal, title, id, actionType }) => {
  return (
    <Modal toggleModal={toggleModal}>
      <EditColumn
        title={actionType === 'add' ? 'Add column' : 'Edit column'}
        buttonText={actionType === 'add' ? 'Add' : 'Edit'}
        placeholder={title}
        actionType={actionType}
        id={id}
      />
    </Modal>
  );
};
