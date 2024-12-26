import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { NavLink, useLocation } from 'react-router-dom';

const TopBanner = () => {
  const { pathname } = useLocation();

  const isOnCoursesPage = pathname === '/courses';

  return (
    <NavLink
      to="/courses"
      className={`mt-10 flex items-center justify-between rounded-md bg-primary-50 px-4 py-[10px] text-[14px] text-white sm:mt-5 sm:justify-center sm:gap-x-6 xl:py-[14px] xl:text-[18px] ${isOnCoursesPage ? 'hidden' : ''}`}
    >
      <span className="text-nowrap">
        Free Courses 🌟 Sale Ends Soon, Get It Now
      </span>
      <ArrowRightIcon className="h-5 w-5" />
    </NavLink>
  );
};

export default TopBanner;
