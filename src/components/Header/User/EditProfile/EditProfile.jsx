import { Button } from '../../../Button/Button';
import { Card } from './Card/Card';
import { SForm_form, STitle_h2 } from './EditProfile.styled';
import { InputList } from './InputList/InputList';

export const EditProfile = () => {
  return (
    <SForm_form>
      <STitle_h2>Edit profile</STitle_h2>
      <Card />
      <InputList />
      <Button title={'Send'} icon={false} />
    </SForm_form>
  );
};
