import type { MenuItem, RouteItem } from '@/router/route';
import type { MenuProps } from 'antd';
import { useCallback, useState } from 'react';
import type { NavigateOptions } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { MenuLayout } from '../AppStyle';

interface Props extends MenuProps {
  menuData?: RouteItem[];
  isHome?: boolean;
  ignoreHide?: boolean;
}

export const AppMenu: React.FC<Props> = (props) => {
  const { menuData, isHome, ignoreHide, mode = 'horizontal', ...rest } = props;
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [menuItems, setMenuItems] = useState<MenuItem[]>(menuData ?? []);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const navigateTo = useCallback((path: string) => {
    let redirectPath = path;
    let redirectParams: NavigateOptions = {};
    // const { currentMenu } = getMenuInfoByPath(routes, redirectPath);

    // if (currentMenu) {
    //   if (currentMenu?.redirect) {
    //     if (typeof currentMenu?.redirect === 'string') {
    //       redirectPath = currentMenu?.redirect;
    //     } else {
    //       redirectPath = currentMenu?.redirect?.to;
    //       redirectParams = currentMenu.redirect?.options || {};
    //     }
    //   }
    //   navigate(redirectPath, redirectParams);
    // }
  }, []);

  const menuItemClick: MenuProps['onClick'] = (e) => {
    navigateTo(e.key);
  };

  return (
    <MenuLayout
      {...rest}
      mode={mode}
      openKeys={openKeys}
      selectedKeys={selectedKeys}
      items={menuItems as any}
      onClick={menuItemClick}
      // 注意这个属性 `onOpenChange`
      onOpenChange={(oKeys: any) => {
        setOpenKeys(oKeys);
      }}
      style={{ border: 'none' }}
    />
  );
};
