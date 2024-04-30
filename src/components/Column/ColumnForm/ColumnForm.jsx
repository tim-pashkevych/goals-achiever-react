import { EditColumn } from '../../EditColumn/EditColumn';
import { Modal } from '../../Modal/Modal';

const infoModal = (actionType) => {
  switch (actionType) {
    case 'add':
      return { title: 'Add column', buttonText: 'Add' };
    case 'edit':
      return { title: 'Edit column', buttonText: 'Edit' };
    default:
      return { title: 'Column', buttonText: 'Add' };
  }
};
export const ColumnForm = ({ toggleModal, title, id, actionType }) => {
  return (
    <Modal toggleModal={toggleModal}>
      <EditColumn
        titleModal={infoModal(actionType)}
        placeholder={title}
        actionType={actionType}
        id={id}
        toggleModal={toggleModal}
      />
    </Modal>
  );
};
