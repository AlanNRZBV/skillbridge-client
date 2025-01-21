import TopBanner from './TopBanner.tsx';
import { icons, paths } from '../../constants';
import { NavLink, useLocation } from 'react-router-dom';
import { Bars3BottomRightIcon } from '@heroicons/react/24/outline';
import { useGetCurrentUserQuery } from '../../features/user/userApi.ts';
import CurrentUser from './CurrentUser.tsx';

const Navbar = () => {
  const { pathname } = useLocation();

  const { data, isError } = useGetCurrentUserQuery();

  console.log('=>(Navbar.tsx:14) data', data);
  console.log('=>(Navbar.tsx:14) data', isError);

  const loginAndSignUp = (
    <>
      <NavLink
        to="/sign-up"
        className={({ isActive }) =>
          isActive
            ? 'rounded-md bg-primary-50 px-5 py-2 text-white md:px-9 md:py-4'
            : 'self-center'
        }
      >
        Sign Up
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive
            ? 'rounded-md bg-primary-50 px-5 py-2 text-white md:px-9 md:py-4'
            : pathname !== '/login' && pathname !== '/sign-up'
              ? 'rounded-md bg-primary-50 px-5 py-2 text-white md:px-9 md:py-4'
              : 'self-center'
        }
      >
        Login
      </NavLink>
    </>
  );

  return (
    <nav>
      <div className="container mx-auto lg:max-w-full">
        <TopBanner />
      </div>
      <div className="container mx-auto">
        <div className="flex items-center justify-between border-b border-light-95 py-[14px]">
          <NavLink to="/" className="mr-[50px] shrink-0">
            <img
              src={icons.mainMobile}
              alt="Skillbridge logo"
              className="h-auto w-10 lg:w-[44px] xl:w-[54px]"
            />
          </NavLink>
          <div className="mr-auto hidden items-center gap-x-[26px] text-[14px] text-dark-15 lg:flex xl:text-[18px]">
            {paths.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  !isActive
                    ? 'rounded-md px-5 py-3 transition duration-200 hover:bg-light-95'
                    : 'rounded-md bg-light-95 px-5 py-3 transition duration-200 hover:bg-transparent'
                }
              >
                {item.title}
              </NavLink>
            ))}
          </div>
          <div className="flex gap-x-5 text-[14px] text-dark-15 xl:text-[18px]">
            {data && !isError ? (
              <CurrentUser user={data.user} />
            ) : (
              loginAndSignUp
            )}
            <button className="h-[34px] w-[34px] lg:hidden">
              <Bars3BottomRightIcon className="text-dark-15" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
