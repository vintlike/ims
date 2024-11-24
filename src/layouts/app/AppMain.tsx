import { Outlet } from 'react-router-dom';
import { AppFooter } from './AppFooter';
import { AppSider } from './AppSider';
import { ContentBodyLayout, ContentLayout, MainLayout } from './AppStyle';

interface Props {}

export const AppMain: React.FC<Props> = (props) => {
  return (
    <MainLayout className="app-main">
      <AppSider />

      <ContentLayout className="app-content">
        <ContentBodyLayout className="app-content-body">
          {/* Outlet相当于是子路由的占位符 */}
          <Outlet />
        </ContentBodyLayout>

        <AppFooter />
      </ContentLayout>
    </MainLayout>
  );
};
