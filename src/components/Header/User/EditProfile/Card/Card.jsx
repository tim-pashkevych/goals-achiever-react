import { useRef, useState } from 'react';
import Resizer from 'react-image-file-resizer';

import { Button } from '../../../../Button/Button';
import { Icon } from '../../../../Icon/Icon';
import {
  SButtonWraper_div,
  SHideInput_input,
  SImageWrapper_div,
  SWrapper_div,
} from './Card.styled';
import { useAppSelector } from '../../../../../hooks';
import { selectUser } from '../../../../../redux';

const resizeFile = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      150,
      150,
      'JPEG',
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      'file'
    );
  });

export const Card = ({ setAvatar }) => {
  const { avatarURL } = useAppSelector(selectUser);
  const [avatarUrl, setAvatarUrl] = useState(avatarURL);
  const inputFile = useRef(null);

  const handleRedirectClick = () => {
    inputFile.current.click();
  };

  const handleInputChange = async (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    setAvatar(file);
    if (!file) return;
    const resizedFile = await resizeFile(file);
    reader.onload = (e) => {
      const resultSrc = e.target.result;
      setAvatarUrl(resultSrc);
    };

    reader.readAsDataURL(resizedFile);
  };

  return (
    <SWrapper_div>
      <SImageWrapper_div>
        {avatarUrl && <img src={avatarUrl} alt="avatar" />}
        {!avatarUrl && <Icon id={'user'} size={48} />}
      </SImageWrapper_div>
      <SButtonWraper_div>
        <Button
          size="editProfile"
          type="button"
          onClick={handleRedirectClick}
        />
        <SHideInput_input
          onChange={handleInputChange}
          ref={inputFile}
          type="file"
          accept="image/jpeg,image/png"
        />
      </SButtonWraper_div>
    </SWrapper_div>
  );
};
