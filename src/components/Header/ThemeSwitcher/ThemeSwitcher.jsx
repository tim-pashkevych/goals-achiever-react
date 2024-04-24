import { useState } from 'react';

import { Icon } from '../../Icon/Icon';

import { STitle_p, SWrapper_div } from './ThemeSwitsher.styled';
import { ThemePopUp } from './ThemePopUp/ThemePopUp';
export const ThemeSwitcher = () => {
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);

  const clickOnWrapper = () => {
    setIsOpenPopUp(!isOpenPopUp);
  };

  return (
    <>
      <SWrapper_div onClick={clickOnWrapper}>
        <STitle_p>Theme</STitle_p>
        {!isOpenPopUp && <Icon id={'chevron-down'} size={16} />}
        {isOpenPopUp && <Icon id={'chevron-up'} size={16} />}

        {isOpenPopUp && <ThemePopUp />}
      </SWrapper_div>
    </>
  );
};
