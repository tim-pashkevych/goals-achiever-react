import { Button } from '../../../../Button/Button';
import { Icon } from '../../../../Icon/Icon';
import {
  SButtonWraper_div,
  SImageWrapper_div,
  SWrapper_div,
} from './Card.styled';

export const Card = () => {
  return (
    <SWrapper_div>
      <SImageWrapper_div>
        {true && (
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTousHbMHE9y6ZaMX9GcxFGJRfxq8aWGYcIV_dPgWOwqQ&s"
            alt="sadasd"
          />
        )}
        {false && <Icon id={'user'} size={48} />}
      </SImageWrapper_div>
      <SButtonWraper_div>
        <Button size="editProfile" type="button" />
      </SButtonWraper_div>
    </SWrapper_div>
  );
};
