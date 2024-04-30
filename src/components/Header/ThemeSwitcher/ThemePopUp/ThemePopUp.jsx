import { useEffect } from 'react';

import { themes } from '../../../../constants/themes';

import {
  SButton_button,
  SList_ul,
  SListItem_li,
  Sspan_span,
} from './ThemePopUp.styled';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { selectTheme, updateUserTheme } from '../../../../redux';

export const ThemePopUp = ({ setIsOpenPopUp, boxRef, setIsLoading }) => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);

  useEffect(() => {
    const handleCloseList = (e) => {
      if (e.target.closest('button') !== boxRef.current) {
        setIsOpenPopUp(false);
      }
    };
    document.addEventListener('click', handleCloseList);
    return () => {
      document.removeEventListener('click', handleCloseList);
    };
  }, [boxRef, setIsOpenPopUp]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.code === 'Escape') {
        setIsOpenPopUp(false);
      }
    };
    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [setIsOpenPopUp]);

  const click = (str) => {
    setIsLoading(true);
    dispatch(updateUserTheme({ theme: str }))
      .unwrap()
      .finally(() => {
        setIsOpenPopUp(false);
        setIsLoading(false);
      });
  };

  return (
    <SList_ul>
      {themes.map((el) => (
        <SListItem_li key={el}>
          <SButton_button onClick={() => click(el)}>
            <Sspan_span className={theme === el && 'active'}>{el}</Sspan_span>
          </SButton_button>
        </SListItem_li>
      ))}
    </SList_ul>
  );
};
