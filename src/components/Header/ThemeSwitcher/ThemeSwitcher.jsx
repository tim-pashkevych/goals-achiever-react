import { useRef, useState } from 'react';

import { Icon } from '../../Icon/Icon';

import {
  STitle_p,
  SWrapper_button,
  SWrapper_div,
} from './ThemeSwitsher.styled';
import { ThemePopUp } from './ThemePopUp/ThemePopUp';

export const ThemeSwitcher = ({ setIsLoading }) => {
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);
  const wrapper = useRef();

  const handleOpen = (e) => {
    if (e.target.closest('ul')) return;
    setIsOpenPopUp(!isOpenPopUp);
  };

  return (
    <SWrapper_div>
      <SWrapper_button onClick={handleOpen} ref={wrapper}>
        <STitle_p>Theme</STitle_p>
        {!isOpenPopUp && <Icon id={'chevron-down'} size={16} />}
        {isOpenPopUp && <Icon id={'chevron-up'} size={16} />}
      </SWrapper_button>
      {isOpenPopUp && (
        <ThemePopUp
          boxRef={wrapper}
          setIsOpenPopUp={setIsOpenPopUp}
          setIsLoading={setIsLoading}
        />
      )}
    </SWrapper_div>
  );
};
