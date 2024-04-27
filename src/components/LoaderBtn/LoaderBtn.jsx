import { InfinitySpin } from 'react-loader-spinner';
import { SWrapper_div } from './LoaderBtn.styled';

export const LoaderBtn = () => {
  return (
    <SWrapper_div>
      <InfinitySpin
        visible={true}
        width="200"
        color="#4fa94d"
        ariaLabel="infinity-spin-loading"
      />
    </SWrapper_div>
  );
};
