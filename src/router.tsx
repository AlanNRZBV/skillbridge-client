import { createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import Home from './pages/Home.tsx';
import NotFound from './pages/NotFound.tsx';
import SignUp from './pages/SignUp.tsx';
import Login from './pages/Login.tsx';
import AboutUs from './pages/AboutUs.tsx';
import Courses from './pages/Courses.tsx';
import Pricing from './pages/Pricing.tsx';
import Contacts from './pages/Contacts.tsx';
import Course from './components/Course.tsx';
import Checkout from './pages/Checkout.tsx';

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
          element: <SignUp />,
        },
        {
          path: '/login',
          element: <Login />,
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
          path: '*',
          element: <NotFound />, // Render inside the outlet for unmatched routers
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
