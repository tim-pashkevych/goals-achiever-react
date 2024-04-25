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
import { useAppSelector } from '../../hooks';
import Card from '../Card/Card';

export const Column = ({ title, id }) => {
  const cards = useAppSelector((state) =>
    state.cards.items.filter((card) => card.columnId === id)
  );

  return (
    <SColumnWrapper>
      <SColumnName>
        <div>{title}</div>

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
          {cards.map((card) => (
            <Card key={card._id} {...card} />
          ))}
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
