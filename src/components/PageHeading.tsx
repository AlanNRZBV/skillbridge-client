import { FC } from 'react';

interface Props {
  title: string;
  description: string;
}

const PageHeading: FC<Props> = ({ title, description }) => {
  return (
    <div className="mb-[3.125em] flex flex-col gap-y-4 border-b border-b-light-90 pb-[1.875em] lg:grid lg:grid-cols-2 lg:gap-x-20 xl:mb-20 2xl:pb-[3.125em]">
      <h3 className="text-[1.75rem] font-semibold text-dark-15 lg:self-center lg:text-[2.375em] 2xl:text-5xl">
        {title}
      </h3>
      <p className="text-sm text-dark-35 lg:text-base 2xl:text-lg">
        {description}
      </p>
    </div>
  );
};

export default PageHeading;
