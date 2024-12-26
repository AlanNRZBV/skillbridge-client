import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon } from '@heroicons/react/16/solid';

interface Props {
  number: string;
  title: string;
  description: string;
  link: string;
}
const BenefitCard: FC<Props> = ({ description, link, number, title }) => {
  return (
    <div className="flex flex-col gap-y-[1.875em] rounded-[10px] bg-white p-[1.875em] lg:gap-y-10">
      <span className="self-end text-[3.125rem] font-bold text-dark-15 lg:text-6xl xl:text-[5rem]">
        {number}
      </span>
      <div className="flex flex-1 flex-col gap-y-[.625em]">
        <span className="font-semibold text-dark-20">{title}</span>
        <p className="text-[.875rem] text-dark-30 lg:text-base">
          {description}
        </p>
      </div>
      <Link
        to={link}
        className="mt-auto self-end rounded-md border border-light-95 bg-light-99 p-[.875em]"
      >
        <ArrowUpRightIcon className="h-[26px] w-auto text-primary-50" />
      </Link>
    </div>
  );
};

export default BenefitCard;
