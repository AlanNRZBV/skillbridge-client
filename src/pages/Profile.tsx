import { useGetCurrentUserQuery } from '../features/user/userApi.ts';

const Profile = () => {
  const {
    data: userResponse,
    isLoading,
    isSuccess,
    isError,
  } = useGetCurrentUserQuery();

  let content;

  if (isLoading) {
    content = <div>Loading...</div>;
  }

  if (isError) {
    content = <div>Error occurred during data loading</div>;
  }

  if (isSuccess) {
    const { user } = userResponse;
    content = <div></div>;
  }

  return (
    <div className="container mx-auto my-[3.125em] xl:my-[6.25em]">
      {content}
    </div>
  );
};

export default Profile;
