import { useContext } from 'react';

import { themes } from '../../../../constants/themes';
import { ThemeContext } from '../../../ThemeContext/ThemeContext';

import { SList_ul, SListItem_li } from './ThemePopUp.styled';

export const ThemePopUp = () => {
  const { setTheme } = useContext(ThemeContext);

  const click = (str) => {
    setTheme(str);
  };
  return (
    <SList_ul>
      {themes.map((el) => (
        <SListItem_li key={el} onClick={() => click(el)}>
          {el}
        </SListItem_li>
      ))}
    </SList_ul>
  );
};
