import { createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import Home from './pages/Home.tsx';
import NotFound from './pages/NotFound.tsx';
import UserFormContainer from './pages/UserFormContainer.tsx';
import AboutUs from './pages/AboutUs.tsx';
import Courses from './pages/Courses.tsx';
import Pricing from './pages/Pricing.tsx';
import Contacts from './pages/Contacts.tsx';
import Course from './components/Course.tsx';
import Checkout from './pages/Checkout.tsx';
import UnderConstruction from './pages/UnderConstruction.tsx';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <NotFound />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/sign-up',
          element: <UserFormContainer key="/sign-up" />,
        },
        {
          path: '/login',
          element: <UserFormContainer key="/login" />,
        },
        {
          path: '/courses',
          element: <Courses />,
        },
        {
          path: '/courses/:id',
          element: <Course />,
        },
        {
          path: '/about-us',
          element: <AboutUs />,
        },
        {
          path: '/pricing',
          element: <Pricing />,
        },
        {
          path: '/contact',
          element: <Contacts />,
        },
        {
          path: '/checkout',
          element: <Checkout />,
        },
        {
          path: '/temporal-path',
          element: <UnderConstruction />,
        },
        {
          path: '*',
          element: <NotFound />,
        },
      ],
    },
  ],
  {
    future: {
      v7_skipActionErrorRevalidation: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
    },
  },
);

export default router;
