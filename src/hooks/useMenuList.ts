import { useMemo } from 'react';
import { handlePowerRoute } from '@/router/RouteUtil';
import { defaultRouter } from '@/router';
import { useRouteList } from './useRouteList';

export const useMenuList = () => {
  // const asyncRouter = useAppSelector((state) => state.route.asyncRouter);
  const { routeListToMenu } = useRouteList();

  const menuList = useMemo(() => {
    return routeListToMenu(handlePowerRoute(defaultRouter as any));
  }, [routeListToMenu]);

  return { menuList };
};
