import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { imageUrl } from '../../constants';
import React from 'react';

interface Props {
  course: ICourse;
}

const CourseCardExtended: FC<Props> = ({ course }) => {
  const {
    author: { firstName, lastName },
    previewImages,
    difficulty,
    length,
    title,
    description,
    _id,
    contents,
  } = course;

  const isContentsEmpty = contents.length === 0;
  const isPreviewImagesEmpty = previewImages.length === 0;

  return (
    <div className="flex flex-col gap-y-10 rounded-lg bg-white p-6 2xl:gap-y-[3.125em] 2xl:p-[3.125em]">
      <div className="flex flex-col gap-y-6 2xl:gap-y-[1.875em]">
        <div className="flex flex-col gap-y-5 lg:flex-row lg:gap-x-[3.125em] lg:gap-y-0">
          <div className="flex flex-col gap-y-1 xl:gap-y-[.375px] 2xl:gap-y-[.625em]">
            <h3 className="text-lg font-semibold text-dark-15 lg:text-xl 2xl:text-2xl">
              {title}
            </h3>
            <p className="text-sm text-dark-35 xl:text-base 2xl:text-[1.125em]">
              {description}
            </p>
          </div>
          <NavLink
            to={`/courses/${_id}`}
            className="shrink self-start rounded-md border border-light-95 bg-light-99 px-4 py-[.875em] text-sm capitalize lg:shrink-0 lg:self-end lg:font-medium"
          >
            view course
          </NavLink>
        </div>
        <div className="flex gap-x-[.625em]">
          {previewImages.map((item, index) => (
            <div
              key={index}
              className="max-h-[100px] overflow-hidden rounded sm:max-h-[150px] md:max-h-[200px] lg:max-h-[250px] lg:rounded-md xl:max-h-[325px] 2xl:max-h-[425px] 2xl:rounded-[.625em]"
            >
              <img
                src={`${imageUrl}${item}`}
                alt={item}
                className="object-contain"
              />
            </div>
          ))}
          {isPreviewImagesEmpty && <span>Coming Soon!</span>}
        </div>
        <div className="flex flex-col gap-y-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex gap-x-2 text-sm capitalize text-dark-35 lg:text-base 2xl:text-lg">
            <span className="rounded-md border border-light-95 bg-white px-3 py-2">
              {length} weeks
            </span>
            <span className="rounded-md border border-light-95 bg-white px-3 py-2">
              {difficulty}
            </span>
          </div>
          <span className="font-medium text-dark-15 lg:text-lg 2xl:text-xl">
            By {firstName} {lastName}
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="rounded-t-xl border border-b-0 border-light-95 px-5 py-[.875em] capitalize lg:px-6 lg:py-5 2xl:px-[1.875em]">
          <h4 className="font-semibold text-dark-15 lg:text-lg 2xl:text-[1.375rem]">
            curriculum
          </h4>
        </div>
        <div className="flex flex-col gap-y-5 rounded-b-xl border border-light-95 p-6 xl:grid xl:grid-cols-[1fr_1px_1fr_1px_1fr_1px_1fr_1px_1fr] xl:gap-x-10 xl:px-10 2xl:px-[3.125em] 2xl:py-[1.875em]">
          {contents.map((item, index) => (
            <React.Fragment key={item._id}>
              <div className="flex flex-col gap-y-3 xl:gap-y-4 2xl:gap-y-5">
                <span className="2xl:[3.125em] text-3xl font-extrabold xl:text-[2.5rem]">
                  0{index + 1}
                </span>
                <span className="text-base font-medium 2xl:text-lg">
                  {item.title}
                </span>
              </div>
              <div className="h-[1px] w-full self-center bg-light-95 last:hidden xl:h-full"></div>
            </React.Fragment>
          ))}
          {isContentsEmpty && <span className="text-center">Coming soon!</span>}
        </div>
      </div>
    </div>
  );
};

export default CourseCardExtended;
