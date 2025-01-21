import { FC } from 'react';
import { useLogOutMutation } from '../../features/user/userApi.ts';

interface Props {
  user: IUser;
}

const CurrentUser: FC<Props> = ({ user }) => {
  const [logout] = useLogOutMutation();

  const logOutHandler = async () => {
    try {
      await logout();
    } catch (e) {}
  };

  return (
    <div className="flex gap-x-4">
      <span className="text-dark-15">{user.email}</span>
      <button onClick={logOutHandler}>logout</button>
    </div>
  );
};

export default CurrentUser;
