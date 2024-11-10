import type { RouteItem } from '@/router/route';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { theme } from 'antd';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  SiderBodyLayout,
  SiderFootLayout,
  SiderHeadLayout,
  SiderLayout,
  SiderTitle
} from './AppStyle';
import { AppMenu } from './components/AppMenu';

interface Props {}

export const AppSider: React.FC<Props> = (props) => {
  const { pathname } = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [topMenu, setTopMenu] = useState<RouteItem>();
  const [subMenus, setSubMenus] = useState<RouteItem[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const {
    token: { colorBgContainer }
  } = theme.useToken();

  return (
    <SiderLayout
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{ backgroundColor: colorBgContainer }}
    >
      <SiderHeadLayout>
        <MenuFoldOutlined style={{ marginRight: 8 }} />
        <SiderTitle>这是标题</SiderTitle>
      </SiderHeadLayout>
      <SiderBodyLayout>
        {/* 单独使用onOpenKey属性的时候会在刷新的时候展开设置的submenu,但无法关闭它，甚至它确实阻止了其他子菜单的打开/关闭。当我们加上了onOpenChange属性的时候就能够实现对其他子菜单的打开/关闭了 */}
        <AppMenu
          menuData={subMenus}
          mode={'inline'}
          ignoreHide={true}
          // defaultSelectedKeys={selectedKeys}
          // defaultOpenKeys={openKeys}
          // openKeys={openKeys}
          // // 注意这个属性 `onOpenChange`
          // onOpenChange={(oKeys) => {
          //   setOpenKeys(oKeys);
          // }}
        />
      </SiderBodyLayout>
      <SiderFootLayout>
        {React.createElement(
          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed)
          }
        )}
      </SiderFootLayout>
    </SiderLayout>
  );
};
