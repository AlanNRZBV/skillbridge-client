import { useGetSelfQuery } from '../features/user/userApi.ts';
import { useParams } from 'react-router-dom';
import { skipToken } from '@reduxjs/toolkit/query';
import { apiUrl } from '../constants';
import EditForm from '../components/Forms/EditForm.tsx';
import { useState } from 'react';

const Profile = () => {
  const { id } = useParams();
  const [modal, setModal] = useState(false);
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

  const toggleModal = () => {
    setModal((prevState) => !prevState);
  };

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
      <div className="relative">
        <div className="rounded-md bg-white px-4 py-5">
          <div className="flex items-center gap-x-4">
            <div className="h-20 w-20 overflow-hidden rounded-full">
              <img src={`${apiUrl}/${profilePicture}`} alt={firstName} />
            </div>
            <div className="flex flex-col">
              <span>
                {firstName} {lastName}
              </span>
              <span>{email}</span>
            </div>
            <button
              onClick={toggleModal}
              className="border border-light-95 bg-light-99 px-5 py-[.875em]"
            >
              Edit
            </button>
          </div>
        </div>
        <EditForm state={modal} />
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
