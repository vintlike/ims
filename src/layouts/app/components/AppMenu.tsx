import type { MenuProps } from 'antd';
import { useCallback, useEffect, useMemo, useState } from 'react';
import type { NavigateOptions } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { MenuLayout } from '../AppStyle';
import { useMenuList } from '@/hooks/useMenuList';
import { useAppSelector } from '@/store/hooks';
import { shallowEqual } from 'react-redux';
import { findRouteByPath, getParentPaths } from '@/router/RouteUtil';
import { useMount } from 'ahooks';

interface Props extends MenuProps {
  isHome?: boolean;
  ignoreHide?: boolean;
  isSidebar?: boolean;
}

export const AppMenu: React.FC<Props> = (props) => {
  const { isSidebar, isHome, ignoreHide, mode = 'horizontal', ...rest } = props;
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { collapsed, sidebarMode } = useAppSelector(
    (state) => ({
      collapsed: state.app.collapsed,
      sidebarMode: state.app.sidebarMode
    }),
    shallowEqual
  );

  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const { menuList } = useMenuList();

  const selectOpenKey = useMemo(() => {
    if (sidebarMode === 'blend' && !isSidebar) {
      const routeKey = getParentPaths(pathname, menuList);

      return [routeKey[0]];
    }

    return [pathname];
  }, [isSidebar, menuList, pathname, sidebarMode]);

  const menuItems = useMemo(() => {
    if (sidebarMode === 'blend') {
      if (isSidebar) {
        // path的父级路由组成的数组
        const parentPathArr = getParentPaths(pathname, menuList);
        // 当前路由的信息
        const parentRoute = findRouteByPath(parentPathArr[0], menuList);
        if (parentRoute) {
          if (parentRoute.children) {
            return parentRoute.children;
          }
          return [parentRoute];
        }
        return [];
      }

      return menuList.map((item) => {
        const { key, label, icon } = item;

        return {
          key,
          label,
          icon
        };
      });
    }

    return menuList;
  }, [isSidebar, menuList, pathname, sidebarMode]);

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    setOpenKeys(keys);
  };

  const navigateTo = useCallback(
    (path: string) => {
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
      navigate(path);
    },
    [navigate]
  );

  const menuItemClick: MenuProps['onClick'] = (e) => {
    navigateTo(e.key);
  };

  const updateKeys = useCallback(() => {
    if (isSidebar) {
      let keys: string[] = [];

      if (!collapsed) {
        keys = getParentPaths(pathname, menuList);
      }

      setOpenKeys(keys);
    }
  }, [collapsed, isSidebar, pathname]);

  useEffect(() => {
    updateKeys();
  }, [updateKeys]);

  return (
    <MenuLayout
      {...rest}
      mode={mode}
      openKeys={openKeys}
      selectedKeys={selectOpenKey}
      items={menuItems as MenuProps['items']}
      onClick={menuItemClick}
      // 注意这个属性 `onOpenChange`
      onOpenChange={onOpenChange}
      style={{ border: 'none' }}
    />
  );
};
