import { FC } from 'react';
import { CheckIcon, XMarkIcon } from '@heroicons/react/16/solid';
import { NavLink } from 'react-router-dom';

interface Props extends IPricingPlan {
  isMonthly: boolean;
}

const PricingCard: FC<Props> = ({
  features,
  perMonth,
  perYear,
  type,
  name,
  isMonthly,
}) => {
  const isFree = type === 'free';
  const array = Object.values(features);

  return (
    <div className="flex flex-grow flex-col gap-y-[1.875em] rounded-xl border border-light-95 bg-light-99 px-5 pb-5 pt-[1.875em] xl:px-6 xl:pb-6 xl:pt-10 2xl:gap-y-[3.125em] 2xl:px-[1.875em] 2xl:pb-[1.875em] 2xl:pt-[3.125em]">
      <span className="rounded-s border border-primary-90 bg-primary-97 px-[1.375em] py-2 text-center text-base font-medium capitalize text-dark-15 xl:px-[1.375em] xl:py-[.625em] xl:text-[1.125rem] 2xl:py-3">
        {isFree ? `free ` : `${name} `}plan
      </span>
      <span className="text-center text-[.875rem] font-medium text-dark-30 xl:text-base 2xl:text-xl">
        <b className="text-[3.125rem] font-semibold leading-[73%] text-dark-15 xl:text-6xl 2xl:text-[5rem]">
          ${isMonthly ? perMonth : perYear}
        </b>
        /{isMonthly ? 'monthly' : 'yearly'}
      </span>
      <div className="flex flex-grow flex-col">
        <div className="flex flex-col gap-y-5 rounded-t-[10px] border border-light-95 bg-white p-5 xl:gap-y-6 xl:p-[1.875em] 2xl:gap-y-[1.875em] 2xl:rounded-t-[14px] 2xl:p-10">
          <span className="text-center text-[1.125rem] font-medium capitalize text-dark-15">
            available features
          </span>
          <ul className="flex flex-col gap-y-5 xl:px-[1.875em]">
            {array.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-x-2 rounded-md border border-light-95 p-3 text-[.875rem] leading-[150%] text-dark-30 2xl:gap-x-3 2xl:rounded-lg 2xl:text-[1.125rem]"
              >
                {item.value ? (
                  <CheckIcon className="h-[24px] w-[24px] flex-shrink-0 rounded-s bg-primary-95 p-1 text-dark-15 2xl:h-[32px] 2xl:w-[32px] 2xl:p-[6px]" />
                ) : (
                  <XMarkIcon className="h-[24px] w-[24px] flex-shrink-0 rounded-s border border-light-95 p-1 text-dark-15 2xl:h-[32px] 2xl:w-[32px] 2xl:p-[6px]" />
                )}
                {item.title}
              </li>
            ))}
          </ul>
        </div>
        <NavLink
          to="/checkout"
          className="rounded-b-[10px] bg-primary-50 px-6 py-[1.125em] text-center capitalize text-white xl:text-[1.125rem]"
        >
          get started
        </NavLink>
      </div>
    </div>
  );
};

export default PricingCard;
