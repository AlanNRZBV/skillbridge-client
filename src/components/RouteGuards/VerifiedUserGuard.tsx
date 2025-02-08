import React, { FC } from 'react';
import { useGetCurrentUserQuery } from '../../features/user/userApi.ts';
import { Navigate, Outlet } from 'react-router-dom';

interface Props extends React.PropsWithChildren {
  redirectTo: string;
}

const VerifiedUserGuard: FC<Props> = ({ redirectTo, children }) => {
  const { data } = useGetCurrentUserQuery();

  if (data) {
    return <Navigate to={redirectTo} replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};

export default VerifiedUserGuard;
