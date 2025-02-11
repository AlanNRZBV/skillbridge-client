import { paths } from '../constants';
import { NavLink } from 'react-router-dom';
import { FC } from 'react';
import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/outline';
import {
  useGetCurrentUserQuery,
  useLogOutMutation,
} from '../features/user/userApi.ts';

interface Props {
  visible: boolean;
  isLg: boolean;
  onClick: () => void;
}

const Sidebar: FC<Props> = ({ visible, isLg, onClick }) => {
  const [logout] = useLogOutMutation();
  const { data: currentUserData, isError } = useGetCurrentUserQuery();

  let userId: string;

  if (currentUserData && !isError) {
    userId = currentUserData.user._id;
  }

  const logOutHandler = async () => {
    try {
      await logout();
    } catch (e) {
      console.log('=>(CurrentUser.tsx:16) e', e);
    }
  };
  return (
    <div
      className={`absolute -left-5 top-0 z-50 bg-white p-4 pl-8 pt-16 transition-all duration-200 ${visible ? 'translate-x-0' : '-translate-x-full'} ${isLg ? 'hidden' : ''}`}
    >
      <div className="flex flex-col gap-y-3 md:gap-y-4">
        {paths.map((item, index) => {
          if (!currentUserData?.user && item.title === 'Profile') {
            return null;
          }
          return (
            <NavLink
              key={index}
              to={item.title === 'Profile' ? `/profile/${userId}` : item.path}
              className={({ isActive }) =>
                !isActive
                  ? 'rounded-md px-5 py-3 transition duration-200 hover:bg-light-95'
                  : 'rounded-md bg-light-95 px-5 py-3 transition duration-200 hover:bg-transparent'
              }
            >
              {item.title}
            </NavLink>
          );
        })}
        {currentUserData?.user && (
          <button
            className="flex justify-center rounded-md border border-light-95 px-5 py-3 transition duration-200 hover:bg-transparent"
            onClick={onClick}
          >
            <div
              onClick={logOutHandler}
              className="h-[35px] w-[35px] rounded-sm p-1"
            >
              <ArrowRightStartOnRectangleIcon />
            </div>
          </button>
        )}
        <button
          className="rounded-md border border-light-95 px-5 py-3 transition duration-200 hover:bg-transparent"
          onClick={onClick}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
