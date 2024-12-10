import { useAppSelector } from '@/store/hooks';
import { useResponsive } from 'ahooks';
import { Space, theme } from 'antd';
import { shallowEqual } from 'react-redux';
import {
  HeaderBodyLayout,
  HeaderFootLayout,
  HeaderHeadLayout,
  HeaderLayout
} from './AppStyle';
import { AppCollapsedSwitch } from './components/AppCollapsedSwitch';
import { AppLogo } from './components/AppLogo';
import { AppMenu } from './components/AppMenu';

interface Props {}

export const AppHeader: React.FC<Props> = (props) => {
  const { sidebarMode } = useAppSelector(
    (state) => ({
      sidebarMode: state.app.sidebarMode
    }),
    shallowEqual
  );
  const globalTheme = theme.useToken();
  const responsive = useResponsive();

  return (
    <HeaderLayout
      className="app-header"
      style={{
        backgroundColor: globalTheme.token.colorBgContainer,
        borderBottom: `1px solid ${globalTheme.token.colorBorder}`
      }}
    >
      {(sidebarMode !== 'blend' || !responsive.sm) && (
        <HeaderHeadLayout className="app-header-head">
          {(sidebarMode === 'vertical' || !responsive.sm) && (
            <AppCollapsedSwitch />
          )}
          {sidebarMode === 'horizontal' && responsive.sm && <AppLogo />}
        </HeaderHeadLayout>
      )}
      <HeaderBodyLayout className="app-header-body">
        {sidebarMode !== 'vertical' && responsive.sm ? <AppMenu /> : null}
      </HeaderBodyLayout>
      <HeaderFootLayout className="app-header-foot">
        <Space size={10}></Space>
      </HeaderFootLayout>
    </HeaderLayout>
  );
};
