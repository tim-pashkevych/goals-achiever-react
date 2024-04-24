import {
  SButton,
  SContainer,
  SForm,
  SImgContainer,
  SInput,
  STitle,
} from './EditColumn.styled';

export const EditColumn = ({ title, buttonText, placeholder }) => {
  return (
    <SContainer>
      <SForm>
        <STitle>{title}</STitle>
        <SInput type="text" placeholder={placeholder} />
        <SButton>
          <SImgContainer>
            <img src="/svgs/plus.svg" alt="" width={14} height={14} />
          </SImgContainer>
          {buttonText}
        </SButton>
      </SForm>
    </SContainer>
  );
};
