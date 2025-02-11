import React, { FC } from 'react';

interface Props {
  state: boolean;
}

const EditForm: FC<Props> = ({ state }) => {
  return (
    <div
      className={`absolute rounded-md border border-light-95 bg-white p-4 ${state ? '' : 'hidden'}`}
    >
      user edit form
    </div>
  );
};

export default EditForm;
