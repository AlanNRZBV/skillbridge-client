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
import Profile from './pages/Profile.tsx';
import UnderConstruction from './pages/UnderConstruction.tsx';
import VerifiedUserGuard from './components/RouteGuards/VerifiedUserGuard.tsx';

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
          element: (
            <VerifiedUserGuard redirectTo={'/'}>
              <UserFormContainer key="/sign-up" />
            </VerifiedUserGuard>
          ),
        },
        {
          path: '/login',
          element: (
            <VerifiedUserGuard redirectTo={'/'}>
              <UserFormContainer key="/login" />
            </VerifiedUserGuard>
          ),
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
          path: '/profile/:id',
          element: <Profile />,
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
    basename: `${import.meta.env.VITE_ROUTER_BASENAME}`,
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
