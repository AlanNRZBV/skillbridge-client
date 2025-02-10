import { FC } from 'react';
import { useLogOutMutation } from '../../features/user/userApi.ts';
import { apiUrl } from '../../constants';
import {
  ArrowRightStartOnRectangleIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';

interface Props {
  user: IUserFromApi;
}

const CurrentUser: FC<Props> = ({ user }) => {
  const [logout] = useLogOutMutation();

  const { profilePicture, firstName, lastName, _id } = user;

  const logOutHandler = async () => {
    try {
      await logout();
    } catch (e) {
      console.log('=>(CurrentUser.tsx:16) e', e);
    }
  };

  return (
    <div className="flex items-center gap-x-4">
      <div className="flex items-center gap-x-[10px] lg:mr-auto 2xl:gap-x-[15px]">
        <div
          className={`h-auto w-10 overflow-hidden rounded-md lg:w-[44px] xl:w-[54px] 2xl:h-[60px] 2xl:w-[60px] ${!profilePicture ? 'bg-light-97 p-3' : ''}`}
        >
          {profilePicture && (
            <img src={`${apiUrl}${profilePicture}`} alt={firstName} />
          )}
          {!profilePicture && <UserIcon />}
        </div>
        <NavLink
          to={`/profile/${_id}`}
          className="font-semibold 2xl:text-lg"
        >{`${firstName} ${lastName.charAt(0)}`}</NavLink>
      </div>
      <button
        onClick={logOutHandler}
        className="h-[35px] w-[35px] rounded-sm border border-light-95 p-1"
      >
        <ArrowRightStartOnRectangleIcon />
      </button>
    </div>
  );
};

export default CurrentUser;
