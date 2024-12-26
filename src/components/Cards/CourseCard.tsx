import { FC } from 'react';
import { NavLink } from 'react-router-dom';

const CourseCard: FC<ICourse> = ({
  _id,
  author,
  description,
  difficulty,
  img,
  length,
  title,
}) => {
  return (
    <div className="flex flex-col gap-y-6 rounded-[10px] border border-light-95 bg-white p-6 xl:gap-y-[30px] xl:p-[3.125em]">
      <div className="flex flex-col gap-y-6 xl:gap-y-[30px]">
        <div className="overflow-hidden rounded-md">
          <img src={img} alt={title} />
        </div>
        <div className="flex flex-wrap items-center gap-x-[10px] gap-y-[14px] text-[.875rem] text-dark-30">
          <span className="gap-x-[10px] rounded-md border border-light-95 bg-white px-[.875em] py-2 xl:text-[1.125rem]">
            {length} Weeks
          </span>
          <span className="gap-x-[10px] rounded-md border border-light-95 bg-white px-[.875em] py-2 xl:text-[1.125rem]">
            {difficulty}
          </span>
          <span className="font-medium sm:ml-auto xl:text-[1.125rem]">
            by {author}
          </span>
        </div>
        <div className="flex flex-col gap-y-[10px] xl:text-[14px]">
          <h4 className="text-[1.125rem] font-semibold text-dark-15 xl:text-2xl">
            {title}
          </h4>
          <p className="text-[.875rem] text-dark-30 xl:text-[1.125rem] xl:text-base">
            {description}
          </p>
        </div>
      </div>
      <NavLink
        to={`/courses/${_id}`}
        className="mt-auto rounded-md border border-light-95 bg-light-97 px-6 py-[.875em] text-center xl:py-[1.125em] xl:text-[1.125rem]"
      >
        Get it Now
      </NavLink>
    </div>
  );
};

export default CourseCard;
