import { Header } from '../../components';
import ScreensPage from '../../components/ScreensPage/ScreensPage';
import Sidebar from '../../components/Sidebar/Sidebar';
import { SMainContainer, SWrapper } from './HomePage.Styled';

const HomePage = () => {
  return (
    <SMainContainer>
      <Sidebar />

      <SWrapper>
        <Header />
        <ScreensPage />
      </SWrapper>
    </SMainContainer>
  );
};

export default HomePage;
