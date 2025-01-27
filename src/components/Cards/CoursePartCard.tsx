import { FC } from 'react';
import { ClockIcon } from '@heroicons/react/24/outline';
import { formatTime } from '../../lib/utils.ts';
interface Props {
  content: IContentsItem;
  index: number;
}

const CoursePartCard: FC<Props> = ({ content, index }) => {
  const { title, lessons } = content;

  const isLessonsEmpty = lessons.length === 0;

  return (
    <div className="flex flex-col gap-y-[1.875em] rounded-[.625em] bg-white p-[1.875em] lg:gap-y-10 lg:p-10">
      <span className="self-end text-[3.125rem] font-bold lg:text-6xl xl:text-[5rem]">
        0{index + 1}
      </span>
      <span className="text-lg font-semibold text-dark-15 lg:text-xl xl:text-2xl">
        {title}
      </span>
      <div className="flex flex-col gap-y-4 xl:gap-y-5">
        {!isLessonsEmpty &&
          lessons.map((item, index) => (
            <div
              key={item._id}
              className="group flex flex-col gap-y-6 rounded-md border border-light-95 p-6 hover:border-primary-80 hover:shadow-[0_0_0_4px] hover:shadow-primary-90 lg:flex-row lg:items-center lg:justify-between lg:gap-x-1.5 lg:px-6 lg:py-5 xl:rounded-lg xl:px-[1.875em] xl:py-4"
            >
              <div className="flex flex-col gap-y-0.5">
                <span className="text-base font-medium text-dark-20">
                  {item.title}
                </span>
                <span className="text-sm text-dark-35">Lesson{index + 1}</span>
              </div>
              <div className="flex shrink-0 items-center gap-x-1 self-start rounded-md bg-light-97 p-2.5 capitalize text-dark-30 duration-200 group-hover:bg-primary-80 lg:self-center">
                <ClockIcon className="h-[20px] w-[20px]" />
                {formatTime(item.length)}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CoursePartCard;
