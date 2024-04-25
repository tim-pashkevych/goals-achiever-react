import { useContext, useEffect } from 'react';

import { themes } from '../../../../constants/themes';
import { ThemeContext } from '../../../ThemeContext/ThemeContext';

import { SButton_button, SList_ul, SListItem_li } from './ThemePopUp.styled';

export const ThemePopUp = ({ setIsOpenPopUp, boxRef }) => {
  const { setTheme } = useContext(ThemeContext);

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
    setTheme(str);
    setIsOpenPopUp(false);
  };

  return (
    <SList_ul>
      {themes.map((el) => (
        <SListItem_li key={el}>
          <SButton_button onClick={() => click(el)}> {el}</SButton_button>
        </SListItem_li>
      ))}
    </SList_ul>
  );
};
