import * as S from './FullCardInfo.styled';

interface IFullCardInfoProps {
  title: string;
  description: string;
}

const FullCardInfo = ({
  title = 'The watch spot design',
  description = "Create a visually stunning and eye-catching watch dial design that embodies our something brand's and some other people have to describe, you know",
}: IFullCardInfoProps) => {
  return (
    <S.infoContainer_div>
      <S.title_h4>{title}</S.title_h4>
      <S.description_p>{description}</S.description_p>
    </S.infoContainer_div>
  );
};

export default FullCardInfo;
