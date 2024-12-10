import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setAppCollapsed } from '@/store/modules/appReducer';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useResponsive } from 'ahooks';
import type { SiderProps } from 'antd';
import { Drawer, theme } from 'antd';
import React from 'react';
import { shallowEqual } from 'react-redux';
import {
  SiderBodyLayout,
  SiderFootLayout,
  SiderHeadLayout,
  SiderLayout,
  SiderTitle
} from './AppStyle';
import { AppMenu } from './components/AppMenu';
import { AppCollapsedSwitch } from './components/AppCollapsedSwitch';

interface Props {}

export const AppSider: React.FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const { collapsed, sidebarMode } = useAppSelector(
    (state: any) => ({
      collapsed: state.app.collapsed,
      sidebarMode: state.app.sidebarMode
    }),
    shallowEqual
  );
  const globalTheme = theme.useToken();
  const responsive = useResponsive();

  const onBreakpoint: SiderProps['onBreakpoint'] = (broken) => {
    let collapsedValue = collapsed;
    if (broken) {
      collapsedValue = true;
    } else {
      collapsedValue = false;
    }
    dispatch(setAppCollapsed(collapsedValue));
  };

  const MenuRender = (
    <>
      <AppMenu isSidebar mode={'inline'} ignoreHide={true} />
    </>
  );

  return (
    <>
      {(sidebarMode !== 'horizontal' || !responsive.sm) && (
        <>
          {responsive.sm ? (
            <SiderLayout
              className="app-sider"
              trigger={null}
              collapsible
              breakpoint="lg"
              collapsedWidth={60}
              width={200}
              theme="light"
              collapsed={collapsed}
              // onBreakpoint={onBreakpoint}
              style={{
                backgroundColor: globalTheme.token.colorBgContainer,
                borderRight: `1px solid ${globalTheme.token.colorBorder}`,
                transition: `all ${globalTheme.token.motionDurationSlow} ${globalTheme.token.motionEaseOut}`
              }}
            >
              <SiderHeadLayout>
                <SiderTitle>这是标题</SiderTitle>
              </SiderHeadLayout>
              <SiderBodyLayout>
                {/* 单独使用onOpenKey属性的时候会在刷新的时候展开设置的submenu,但无法关闭它，甚至它确实阻止了其他子菜单的打开/关闭。当我们加上了onOpenChange属性的时候就能够实现对其他子菜单的打开/关闭了 */}
                {MenuRender}
              </SiderBodyLayout>
              <SiderFootLayout>
                <AppCollapsedSwitch />
              </SiderFootLayout>
            </SiderLayout>
          ) : (
            <Drawer
              width={200}
              placement="left"
              destroyOnClose={false}
              closable={false}
              onClose={() => dispatch(setAppCollapsed(!collapsed))}
              open={!collapsed}
              styles={{ body: { padding: 0, height: '100%' } }}
            >
              <div className="sidebar">{MenuRender}</div>
            </Drawer>
          )}
        </>
      )}
    </>
  );
};
