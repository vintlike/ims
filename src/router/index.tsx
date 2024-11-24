import ErrorElement from '@/pages/error/ErrorElement';
import ErrorPage404 from '@/pages/error/ErrorPage404';
import Login from '@/pages/login';
import Refresh from '@/pages/Refresh';
import { AppContainer } from '../layouts/app/AppContainer';
import type { RouteItem } from './route';
import Authority from '@/layouts/Authority';
import Home from '@/pages/home/Home';
import AboutUs from '@/pages/about/AboutUs';
import ContactUs from '@/pages/about/ContactUs';
import Help from '@/pages/about/Help';

export const whiteList: RouteItem[] = [
  {
    path: '*',
    element: <ErrorPage404 />
  },
  {
    path: '/refresh/*',
    element: <Refresh />,
    meta: { label: '刷新', hideSidebar: true, whiteList: true }
  }
];

export const defaultRouter: RouteItem[] = [
  {
    path: '/home',
    id: 'Home',
    element: <Home />,
    meta: {
      label: '首页'
    }
  },
  {
    path: '/about',
    id: 'About',
    redirect: '/about/aboutUs',
    meta: {
      label: '关于'
    },
    children: [
      {
        path: 'aboutUs',
        id: 'aboutUs',
        element: <AboutUs />,
        meta: {
          label: '关于我们'
        }
      },
      {
        path: 'contactUs',
        id: 'contactUs',
        element: <ContactUs />,
        meta: {
          label: '联系我们'
        }
      },
      {
        path: 'help',
        id: 'help',
        element: <Help />,
        meta: {
          label: '帮助中心'
        }
      }
    ]
  }
];

export const baseRouter: RouteItem[] = [
  {
    path: '/',
    element: (
      <Authority>
        <AppContainer />
      </Authority>
    ),
    errorElement: <ErrorElement pageType="Layout" />,
    children: [...defaultRouter, ...whiteList]
  },
  {
    path: '/login',
    element: <Login />
  }
];
