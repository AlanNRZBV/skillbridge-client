import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { imageUrl } from '../../constants';

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

  return (
    <div className="flex flex-col gap-y-10 rounded-lg bg-white p-6">
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-col gap-y-5">
          <div className="flex flex-col gap-y-1">
            <h3 className="text-[1.125rem] font-semibold text-dark-15">
              {title}
            </h3>
            <p className="text-sm text-dark-35">{description}</p>
          </div>
          <NavLink
            to={`/courses/${_id}`}
            className="shrink self-start rounded-md border border-light-95 bg-light-99 px-4 py-[.875em] text-sm capitalize"
          >
            view course
          </NavLink>
        </div>
        <div className="flex gap-x-[.625em]">
          {previewImages.map((item, index) => (
            <div className="max-h-[100px] overflow-hidden rounded">
              <img
                key={index}
                src={`${imageUrl}${item}`}
                alt={item}
                className="object-contain"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-y-4">
          <div className="flex gap-x-2 text-sm capitalize text-dark-35">
            <span className="rounded-md border border-light-95 bg-white px-3 py-2">
              {length} weeks
            </span>
            <span className="rounded-md border border-light-95 bg-white px-3 py-2">
              {difficulty}
            </span>
          </div>
          <span className="font-medium text-dark-15">
            by {firstName}, {lastName}
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="rounded-t-xl border border-b-0 border-light-95 px-5 py-[.875em] capitalize">
          <h4 className="font-semibold text-dark-15">curriculum</h4>
        </div>
        <div className="flex flex-col gap-y-5 rounded-b-xl border border-light-95 p-6">
          {contents.map((item, index) => (
            <>
              <div className="flex flex-col gap-y-3">
                <span className="text-[1.875rem] font-extrabold">
                  0{index + 1}
                </span>
                <span>{item.title}</span>
              </div>
              <div className="h-[1px] bg-light-95 last:hidden"></div>
            </>
          ))}
          {isContentsEmpty && <span className="text-center">Coming soon!</span>}
        </div>
      </div>
    </div>
  );
};

export default CourseCardExtended;
