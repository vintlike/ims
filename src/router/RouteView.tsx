import { memo } from 'react';
import type { RouteObject } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { baseRouter } from '.';

const RouteView = memo(() => {
  const routeElem = createBrowserRouter(baseRouter as RouteObject[]);
  console.log(baseRouter);
  return <RouterProvider router={routeElem} />;
});

export default RouteView;
