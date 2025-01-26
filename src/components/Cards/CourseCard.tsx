import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { imageUrl } from '../../constants';

interface Props {
  course: ICourse;
}

const CourseCard: FC<Props> = ({ course }) => {
  const {
    description,
    length,
    difficulty,
    title,
    mainImg,
    author: { lastName, firstName },
    _id,
  } = course;
  return (
    <div className="flex flex-col gap-y-6 rounded-[10px] border border-light-95 bg-white p-6 xl:gap-y-[30px] xl:p-[3.125em]">
      <div className="flex flex-col gap-y-6 xl:gap-y-[30px]">
        <div className="overflow-hidden rounded-md">
          <img src={`${imageUrl}${mainImg}`} alt={title} />
        </div>
        <div className="flex flex-wrap items-center gap-x-[10px] gap-y-[14px] text-sm text-dark-30">
          <span className="gap-x-[10px] rounded-md border border-light-95 bg-white px-[.875em] py-2 xl:text-lg">
            {length} Weeks
          </span>
          <span className="gap-x-[10px] rounded-md border border-light-95 bg-white px-[.875em] py-2 xl:text-lg">
            {difficulty}
          </span>
          <span className="font-medium sm:ml-auto xl:text-lg">
            by {firstName} {lastName}
          </span>
        </div>
        <div className="flex flex-col gap-y-[10px] xl:text-[14px]">
          <h4 className="text-lg font-semibold text-dark-15 xl:text-2xl">
            {title}
          </h4>
          <p className="text-sm text-dark-30 xl:text-base xl:text-lg">
            {description}
          </p>
        </div>
      </div>
      <NavLink
        to={`/courses/${_id}`}
        className="mt-auto rounded-md border border-light-95 bg-light-97 px-6 py-[.875em] text-center xl:py-[1.125em] xl:text-lg"
      >
        Get it Now
      </NavLink>
    </div>
  );
};

export default CourseCard;
