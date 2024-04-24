import {
  S_bottomPartContainer_div,
  S_card_div,
  S_deadlineValue_p,
  S_description_p,
  S_priorityValue_p,
  S_title_h4,
  S_tagsList_ul,
  S_tagItem_li,
  S_actionButtonsList_ul,
  S_actionItem_li,
  S_actionButton_button,
  S_tagLabel_h5,
  S_bottomRightPartContainer_div,
} from './Card.styled';
import icons from '../../assets/sprite.svg';
// import { useAppDispatch } from '../../hooks';

interface ICardProps {
  title: string;
  description: string;
  priority: string;
  deadline: string;
  _id: string;
  columnId: string;
  boardId: string;
}

const Card = ({
  title = 'The watch spot design',
  description = "Create a visually stunning and eye-catching watch dial design that embodies our brand's...",
  deadline = '12/05/2023',
  priority = 'Low',
  _id,
  columnId,
  boardId,
}: ICardProps) => {
  // const dispatch = useAppDispatch();

  const onDelete = () => {
    // dispatch(deleteCardById);
    console.log({ _id, columnId, boardId });
  };

  const generateRandomColor = () => {
    const red = Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, '0');
    const green = Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, '0');
    const blue = Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, '0');

    const color = '#' + red + green + blue;

    return color;
  };

  const randomColor = generateRandomColor();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        inset: 0,
      }}
    >
      <S_card_div $stickerColor={randomColor}>
        <S_title_h4>{title}</S_title_h4>
        <S_description_p>{description}</S_description_p>
        <S_bottomPartContainer_div>
          <S_tagsList_ul>
            <S_tagItem_li>
              <S_tagLabel_h5>Priority</S_tagLabel_h5>
              <S_priorityValue_p $priorityColor={randomColor}>
                {priority}
              </S_priorityValue_p>
            </S_tagItem_li>
            <S_tagItem_li>
              <S_tagLabel_h5>Deadline</S_tagLabel_h5>
              <S_deadlineValue_p>{deadline}</S_deadlineValue_p>
            </S_tagItem_li>
          </S_tagsList_ul>
          <S_bottomRightPartContainer_div>
            <svg width={16} height={16} stroke={generateRandomColor()}>
              <use href={`${icons}#icon-bell`}></use>
            </svg>
            <S_actionButtonsList_ul>
              <S_actionItem_li>
                <S_actionButton_button>
                  <svg width={16} height={16}>
                    <use href={`${icons}#icon-normal`}></use>
                  </svg>
                </S_actionButton_button>
              </S_actionItem_li>
              <S_actionItem_li>
                <S_actionButton_button>
                  <svg width={16} height={16}>
                    <use href={`${icons}#icon-pencil`}></use>
                  </svg>
                </S_actionButton_button>
              </S_actionItem_li>
              <S_actionItem_li>
                <S_actionButton_button onClick={() => onDelete()}>
                  <svg width={16} height={16}>
                    <use href={`${icons}#icon-trash`}></use>
                  </svg>
                </S_actionButton_button>
              </S_actionItem_li>
            </S_actionButtonsList_ul>
          </S_bottomRightPartContainer_div>
        </S_bottomPartContainer_div>
      </S_card_div>
    </div>
  );
};

export default Card;
