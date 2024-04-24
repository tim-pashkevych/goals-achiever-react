import { Button } from '../../../../Button/Button';
import { Icon } from '../../../../Icon/Icon';
import { SButtonWraper_div, SWrapper_div } from './Card.styled';

export const Card = () => {
  return (
    <SWrapper_div>
      <Icon id={'user'} size={48} />
      <SButtonWraper_div>
        <Button size="editProfile" type="button" />
      </SButtonWraper_div>
    </SWrapper_div>
  );
};
