import { Outlet } from 'react-router-dom';
import { Header, Loader, Sidebar } from '../../components';

import { SMainContainer, SWrapper, Sdiv } from './HomePage.Styled';
import { Suspense } from 'react';

const HomePage = () => {
  return (
    <SMainContainer>
      <Sdiv>
        <Sidebar />
      </Sdiv>

      <SWrapper>
        <Header />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </SWrapper>
    </SMainContainer>
  );
};

export default HomePage;
