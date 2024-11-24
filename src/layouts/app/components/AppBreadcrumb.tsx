import type { RouteItem } from '@/router/route';
import { Breadcrumb } from 'antd';
import type {
  BreadcrumbItemType,
  BreadcrumbSeparatorType,
  ItemType
} from 'antd/es/breadcrumb/Breadcrumb';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const BreadcrumbLayout = styled(Breadcrumb)`
  width: 100%;
  min-height: 56px;
  padding: 16px;
`;

interface Props {}

export const AppBreadcrumb: React.FC<Props> = (props) => {
  const { pathname } = useLocation();
  const [breadcrumbList, setBreadcrumbList] = useState<RouteItem[]>([]);

  useEffect(() => {
    if (pathname) {
    }
  }, [pathname]);

  function itemRender(
    item: Partial<BreadcrumbItemType & BreadcrumbSeparatorType>,
    params: any,
    items: Partial<BreadcrumbItemType & BreadcrumbSeparatorType>[],
    paths: string[]
  ) {
    const last = items.indexOf(item) === items.length - 1;
    return last ? (
      <span>{item.title}</span>
    ) : paths.length ? (
      <Link to={paths.join('/')}>{item.title}</Link>
    ) : null;
  }

  return (
    <BreadcrumbLayout
      itemRender={itemRender}
      items={breadcrumbList as ItemType[]}
    />
  );
};
