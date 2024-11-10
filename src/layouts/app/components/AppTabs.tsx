import type { RouteItem } from '@/router/route';
import { Button, Tabs } from 'antd';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const { TabPane } = Tabs;

const TabsLayout = styled(Tabs)`
  width: 100%;

  .ant-tabs-nav {
    min-height: 50px;
    margin-bottom: 0;
    padding: 0 20px;
    .ant-tabs-nav-wrap {
      .ant-tabs-nav-list {
        .ant-tabs-tab {
          padding: 13px 0;
          font-size: 14px;

          + .ant-tabs-tab {
            margin-left: 30px;
          }

          &.ant-tabs-tab-active .ant-tabs-tab-btn {
            /* color: var(--color-primary); */
          }
        }
      }
    }
  }

  .ant-tabs-content-holder {
    .ant-tabs-content {
      position: relative;
      .ant-tabs-tabpane {
        position: relative;
        display: flex;
        flex-direction: column;
      }
    }
  }
`;

interface Props {
  activeTabKey?: string;
}

export const AppTabs: React.FC<Props> = (props) => {
  const { activeTabKey } = props;
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [currentMenu, setCurrentMenu] = useState<RouteItem>();
  const [tabMenus, setTabMenus] = useState<RouteItem[]>([]);
  const [activeKey, setActiveKey] = useState(activeTabKey ?? '');

  const onTabChange = (key: string) => {
    setActiveKey(key);
    navigate(`${key}`);
    console.log(key);
  };

  useEffect(() => {
    if (pathname) {
    }
  }, [pathname]);

  useEffect(() => {
    if (currentMenu && tabMenus?.length) {
    }
  }, [tabMenus, currentMenu, pathname]);

  return (
    <TabsLayout
      activeKey={activeKey}
      tabBarExtraContent={<Button>Extra Action</Button>}
      onChange={onTabChange}
    >
      {tabMenus.map((item, idx) => {
        return (
          <TabPane tab={item.label} key={item.key}>
            Content of card tab {idx}
          </TabPane>
        );
      })}
    </TabsLayout>
  );
};
