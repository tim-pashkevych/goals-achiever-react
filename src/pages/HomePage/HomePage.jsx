import { Header } from '../../components';
import ScreensPage from '../ScreensPage/ScreensPage';
// import Sidebar from '../../components/Sidebar/Sidebar';
import { SMainContainer, SWrapper } from './HomePage.Styled';

const HomePage = () => {
  return (
    <SMainContainer>
      <div>SideBar</div>

      <SWrapper>
        <Header />
        <ScreensPage />
      </SWrapper>
    </SMainContainer>
  );
};

export default HomePage;
