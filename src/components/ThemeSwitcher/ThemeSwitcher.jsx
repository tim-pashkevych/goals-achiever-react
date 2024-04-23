import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { themes } from '../../constants';
import { SListItem_div } from './ThemeSwitsher.styled';
import { Button } from '../Button/Button';

export const ThemeSwitcher = () => {
  const { setTheme } = useContext(ThemeContext);

  const click = (str) => {
    console.log('click');
    console.log(str);
    setTheme(str);
  };
  return (
    <>
      <SListItem_div>
        <p>ThemeSwitcher</p>
      </SListItem_div>

      <SListItem_div>
        {themes.map((el) => (
          <Button key={el} onClick={() => click(el)} title={el} />
        ))}
      </SListItem_div>
    </>
  );
};
