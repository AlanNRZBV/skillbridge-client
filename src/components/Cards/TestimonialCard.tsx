import { FC } from 'react';
import { NavLink } from 'react-router-dom';

const TestimonialCard: FC<ITestimonial> = ({ _id, img, content, author }) => {
  return (
    <div className="flex flex-col rounded-[10px] border border-light-95 bg-white xl:rounded-xl">
      <div className="p-[1.875em] lg:p-10 2xl:p-[3.125em]">
        <p className="text-[.875rem] text-dark-30 lg:text-base 2xl:text-[1.125rem]">
          {content}
        </p>
      </div>
      <div className="mt-auto border-t border-light-95">
        <div className="grid grid-cols-2 items-center px-[1.875em] py-5 lg:flex lg:p-6 lg:px-10 2xl:px-[3.125em] 2xl:py-[1.875em]">
          <div className="flex items-center gap-x-[10px] lg:mr-auto 2xl:gap-x-[15px]">
            <div className="h-[50px] w-[50px] overflow-hidden rounded-md 2xl:h-[60px] 2xl:w-[60px]">
              <img src={img} alt={author} />
            </div>
            <span className="font-semibold 2xl:text-[1.125rem]">{`${author.split(' ')[0]} ${author.split(' ')[1][0]}`}</span>
          </div>
          <NavLink
            className="self-stretch rounded-md border border-light-95 bg-light-97 px-4 py-[.875em] text-center text-[.875rem] font-medium text-dark-15 2xl:rounded-lg 2xl:px-6 2xl:py-[1.125em] 2xl:text-[1.125rem]"
            to={`/testimonials/:${_id}`}
          >
            Read Full Story
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
