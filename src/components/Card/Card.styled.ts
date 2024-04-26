import styled from 'styled-components';

interface ICardContainerProps {
  $stickerColor: string;
}

export const card_div = styled.div<ICardContainerProps>`
  background-color: #121212; //?

  display: flex;
  flex-direction: column;

  width: 335px;
  max-width: 335px;
  min-height: 154px;

  border-radius: 8px;

  padding: 14px 20px 14px 24px;

  position: relative;
  &::before {
    content: '';

    width: 8px;
    height: 100%;
    border-radius: 4px;

    background-color: ${(props) => props.$stickerColor};

    position: absolute;
    top: 0;
    left: 0;
  }
  &::after {
    content: '';

    width: 5px;
    height: 100%;

    background-color: #121212; //?

    position: absolute;
    top: 0;
    left: 4px;
  }
`;

export const title_h4 = styled.h4`
  font-weight: 600;
  font-size: 14px;
  line-height: 1.5;

  text-transform: capitalize;

  margin-bottom: 8px;

  color: #ffffff; //?
`;

export const description_p = styled.p`
  font-size: 12px;
  line-height: 1.33;

  max-width: 290px;
  height: 38px;

  //test
  /* height: 48px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3; // Number of lines to show
  -webkit-box-orient: vertical;
  text-overflow: ellipsis; */
  //test

  margin-bottom: 28px;

  color: rgba(255, 255, 255, 0.5); //?

  position: relative;
  &::after {
    content: '';

    position: absolute;
    left: 50%;
    bottom: -14px;

    transform: translateX(-50%);

    width: 291px;
    height: 1px;

    background-color: rgba(255, 255, 255, 0.1); //?
  }
`;

export const bottomPartContainer_div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

export const tagsList_ul = styled.ul`
  display: flex;
  column-gap: 14px;
`;

export const tagItem_li = styled.li`
  color: #ffffff; //?

  display: flex;
  flex-direction: column;
  row-gap: 4px;

  font-size: 10px;
  line-height: 1.5;
`;

export const tagLabel_h5 = styled.h5`
  color: rgba(255, 255, 255, 0.5); //?

  font-weight: 400;
  font-size: 8px;
`;

interface IPriorityValueProps {
  $priorityColor: string;
}

export const priorityValue_p = styled.p<IPriorityValueProps>`
  padding-left: 14px;
  min-width: 35px;

  letter-spacing: -0.02em;

  position: relative;
  &::before {
    content: '';

    position: absolute;
    top: 1px;
    left: 0;

    width: 12px;
    height: 12px;

    border-radius: 50%;

    background: ${(props) => props.$priorityColor};
  }
`;

export const deadlineValue_p = styled.p`
  letter-spacing: -0.02em;
`;

export const bottomRightPartContainer_div = styled.div`
  display: flex;
  column-gap: 13px;
`;

export const actionButtonsList_ul = styled.ul`
  display: flex;
  column-gap: 8px;
`;

export const actionItem_li = styled.li`
  width: 16px;
  height: 16px;
`;

export const actionButton_button = styled.button`
  display: flex;

  stroke: rgba(255, 255, 255, 0.5); //?

  transition: stroke 250ms ease-in-out;

  &:hover,
  &:focus {
    stroke: rgba(255, 255, 255, 1); //?
  }
`;
