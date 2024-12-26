import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props extends React.PropsWithChildren {
  title: string;
  description: string;
  link: string;
  controls?: boolean;
  onClick?: () => void;
  isMonthly?: boolean;
  isFaq?: boolean;
}

const Section: FC<Props> = ({
  title,
  description,
  link,
  children,
  controls,
  onClick,
  isMonthly,
  isFaq,
}) => {
  const active = 'rounded-md bg-primary-50 text-white';

  const headerBlock = (
    <div
      className={`${!isFaq ? 'col-span-full sm:flex-row' : ''} flex flex-col gap-y-5 sm:gap-x-[150px] sm:gap-y-0 lg:gap-x-[300px]`}
    >
      <div
        className={`flex flex-col gap-y-1 lg:gap-y-[.375em] ${isFaq ? 'mb-10' : ''}`}
      >
        <h3 className="text-[1.75rem] font-semibold capitalize leading-[150%] text-dark-15 lg:text-5xl">
          {title}
        </h3>
        <span className="text-[.875rem] leading-[150%] text-dark-35 lg:text-[1.125rem]">
          {description}
        </span>
      </div>
      {controls ? (
        <div className="self-center rounded-lg bg-white p-3 text-[.875rem] font-medium sm:flex sm:self-end xl:text-[1.125rem]">
          <button
            onClick={onClick}
            className={`rounded-md px-6 py-3 capitalize transition duration-200 ease-in-out xl:px-[1.875em] xl:py-[.875em] ${isMonthly ? active : ''}`}
            disabled={isMonthly}
          >
            monthly
          </button>
          <button
            onClick={onClick}
            className={`rounded-md px-6 py-3 capitalize transition duration-200 ease-in-out xl:px-[1.875em] xl:py-[.875em] ${!isMonthly ? active : ''}`}
            disabled={!isMonthly}
          >
            yearly
          </button>
        </div>
      ) : (
        <Link
          className={`self-start text-nowrap rounded-md border border-light-95 bg-light-99 px-5 py-[.875em] ${!isFaq ? 'sm:self-end' : ''} lg:px-6 lg:py-[1.125em] lg:text-[1.125rem]`}
          to={link}
        >
          View All
        </Link>
      )}
    </div>
  );

  if (isFaq) {
    return (
      <section
        className={`2xl:[9.375em] container mx-auto mb-[3.25em] grid grid-cols-1 lg:mb-[6.25em]`}
      >
        <div className="grid grid-cols-1 gap-y-10 rounded-xl bg-white p-6 lg:grid-cols-2 lg:gap-x-20 lg:p-20 xl:grid-cols-3 2xl:gap-x-[7.5em] 2xl:p-[6.25em]">
          {headerBlock}
          {children}
        </div>
      </section>
    );
  }

  return (
    <section className={`container mx-auto grid grid-cols-1 gap-y-10`}>
      {headerBlock}
      {children}
    </section>
  );
};

export default Section;
