import { InfinitySpin } from 'react-loader-spinner';
import { SBackdrop } from '../Backdrop/Backdrop.styled';

export const Loader = () => {
  return (
    <SBackdrop>
      <InfinitySpin
        visible={true}
        width="200"
        color="#4fa94d"
        ariaLabel="infinity-spin-loading"
      />
    </SBackdrop>
  );
};
