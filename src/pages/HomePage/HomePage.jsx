import { Outlet } from 'react-router-dom';
import { Header, Loader, Sidebar } from '../../components';
// import Sidebar from '../../components/Sidebar/Sidebar';
import { SMainContainer, SWrapper } from './HomePage.Styled';
import { Suspense } from 'react';

const HomePage = () => {
  return (
    <SMainContainer>
      <div>
        <Sidebar />
      </div>

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
