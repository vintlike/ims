import { AppLogo } from './components/AppLogo';
import { AppMenu } from './components/AppMenu';
import {
  HeaderBodyLayout,
  HeaderFootLayout,
  HeaderHeadLayout,
  HeaderLayout
} from './AppStyle';
import { useMenuList } from '@/hooks/useMenuList';
import { useMemo } from 'react';

interface Props {}

export const AppHeader: React.FC<Props> = (props) => {
  const { menuList } = useMenuList();
  const menuItems = useMemo(() => {
    return menuList;
  }, [menuList]);

  return (
    <HeaderLayout className="app-header">
      <HeaderHeadLayout className="app-header-head">
        <AppLogo />
      </HeaderHeadLayout>
      <HeaderBodyLayout className="app-header-body">
        <AppMenu menuData={menuItems} />
      </HeaderBodyLayout>
      <HeaderFootLayout className="app-header-foot"></HeaderFootLayout>
    </HeaderLayout>
  );
};
