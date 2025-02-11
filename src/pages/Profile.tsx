import { useGetSelfQuery } from '../features/user/userApi.ts';
import { useParams } from 'react-router-dom';
import { skipToken } from '@reduxjs/toolkit/query';
import { apiUrl } from '../constants';

const Profile = () => {
  const { id } = useParams();
  const {
    data: userResponse,
    isLoading,
    isSuccess,
    isError,
  } = useGetSelfQuery(id ? id : skipToken);

  let content;

  if (isLoading) {
    content = <div>Loading...</div>;
  }

  if (isError) {
    content = <div>Error occurred during data loading</div>;
  }

  if (userResponse && isSuccess) {
    const {
      user: {
        firstName,
        lastName,
        email,
        profilePicture,
        updatedAt,
        createdAt,
      },
    } = userResponse;
    content = (
      <div>
        <div>
          <div>
            <img src={`${apiUrl}${profilePicture}`} alt={firstName} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-[3.125em] xl:my-[6.25em]">
      {content}
    </div>
  );
};

export default Profile;
