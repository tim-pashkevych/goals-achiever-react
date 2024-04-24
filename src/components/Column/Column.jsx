import {
  SButtonWrapper,
  SCardWrapper,
  SCardWrapperScroll,
  SColumnName,
  SColumnWrapper,
  SIcon,
  SIconsWrapper,
} from './Column.styled';

import { Button } from '../Button/Button';
import Icons from '../../assets/sprite.svg';

export const Column = () => {
  return (
    <SColumnWrapper>
      <SColumnName>
        <div>To Do</div>

        <SIconsWrapper>
          <button>
            <SIcon width={16} height={16}>
              <use href={Icons + '#icon-pencil'}></use>
            </SIcon>
          </button>

          <button>
            <SIcon width={16} height={16}>
              <use href={Icons + '#icon-trash'}></use>
            </SIcon>
          </button>
        </SIconsWrapper>
      </SColumnName>

      <SCardWrapper>
        <SCardWrapperScroll>
          {/* HERE WE NEED RENDER CARDS */}
        </SCardWrapperScroll>
      </SCardWrapper>

      <SButtonWrapper>
        <Button
          title={'Add another card'}
          icon={true}
          size={'large'}
          style={{ width: 3340 }}
        />
      </SButtonWrapper>
    </SColumnWrapper>
  );
};
