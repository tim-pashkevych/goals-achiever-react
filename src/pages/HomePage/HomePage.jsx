import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header, Loader, Sidebar } from '../../components';
import { SMainContainer, SWrapper } from './HomePage.Styled';

const HomePage = () => {
  return (
    <SMainContainer>
      <Sidebar className="sidebarHome" />
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
