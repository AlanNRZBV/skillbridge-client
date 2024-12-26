import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { PlusIcon } from '@heroicons/react/16/solid';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const FaqCard: FC<IQuestion> = ({ _id, answer, link, linkTitle, question }) => {
  const initial = _id === '01';
  const [isOpen, setIsOpen] = useState<boolean>(initial);
  const toggleHandler = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="flex flex-col gap-y-5 rounded-[10px] border border-light-95 p-6 lg:gap-y-10 lg:p-10 2xl:gap-y-[3.25em] 2xl:p-[3.25em]">
      <div
        className={`flex items-center justify-between gap-x-[1.875em] ${isOpen ? 'border-b border-light-95 pb-5' : ''}`}
      >
        <span className="text-base font-medium text-dark-15 lg:text-[1.125rem] 2xl:text-xl">
          {question}
        </span>
        <button
          onClick={toggleHandler}
          className="flex items-center justify-center rounded-md bg-primary-95 p-[.875em] text-dark-15 lg:h-[44px] lg:w-[44px]"
        >
          <PlusIcon
            className={`h-[20px] w-[20px] shrink-0 transition duration-200 ease-in-out 2xl:h-7 2xl:w-7 ${isOpen ? 'rotate-45' : ''}`}
          />
        </button>
      </div>
      {isOpen ? (
        <>
          <p className="text-[.875rem] text-dark-30 lg:text-base 2xl:text-[1.125em]">
            {answer}
          </p>
          <NavLink
            to={link}
            className="flex items-center justify-between gap-x-2 rounded-md border border-light-95 bg-light-97 px-5 py-3 text-[.875rem] font-medium lg:px-6 lg:py-4 lg:text-base 2xl:rounded-lg 2xl:p-[1.875em] 2xl:text-[1.125rem]"
          >
            <span>{linkTitle}</span>
            <div className="rounded-full border border-light-95 bg-white p-2">
              <ArrowRightIcon className="h-5 w-5 lg:h-6 lg:w-6 2xl:h-7" />
            </div>
          </NavLink>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default FaqCard;
