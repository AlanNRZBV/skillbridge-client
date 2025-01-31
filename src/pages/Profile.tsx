import { useGetCurrentUserQuery } from '../features/user/userApi.ts';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { data } = useGetCurrentUserQuery();
  const navigate = useNavigate();
  useEffect(() => {
    if (!data) {
      navigate('/login');
    }
  }, [data, navigate]);

  return <div>checkout page</div>;
};

export default Profile;
