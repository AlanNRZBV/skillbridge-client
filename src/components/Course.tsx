import { useParams } from 'react-router-dom';
import { useGetCourseByIdQuery } from '../features/course/courseApi.ts';
import ReactPlayer from 'react-player';
import CoursePartCard from './Cards/CoursePartCard.tsx';

const Course = () => {
  const { id } = useParams();
  const { data, isLoading, isSuccess, isError } = useGetCourseByIdQuery(id!, {
    skip: !id,
  });

  let content;

  if (isLoading) {
    content = <div>Course is loading</div>;
  }

  if (isError) {
    content = <div>something wrong</div>;
  }

  if (data && isSuccess) {
    const { title, description, contents, mainVideo } = data.course;

    const isContentsEmpty = contents.length === 0;

    content = (
      <>
        <div className="flex flex-col gap-y-4 border-b border-b-light-95 pb-[1.875em] lg:grid lg:grid-cols-2 lg:gap-x-20 lg:pb-20">
          <h3 className="text-[1.75em] font-semibold text-dark-15 lg:text-[2.375rem] xl:gap-x-[8.25em] xl:text-5xl">
            {title}
          </h3>
          <p className="text-sm text-dark-35 lg:text-base xl:text-lg">
            {description}
          </p>
        </div>
        {mainVideo && (
          <div className="relative my-[3.125em] overflow-hidden rounded-[10px] pt-[56.25%] lg:my-20 xl:my-[6.25em]">
            <ReactPlayer
              url={mainVideo}
              width="100%"
              height="100%"
              style={{ position: 'absolute', top: 0, left: 0 }}
            />
          </div>
        )}
        <div className="flex flex-col gap-y-5 lg:grid lg:grid-cols-2 lg:gap-5 xl:gap-[1.875em]">
          {!isContentsEmpty &&
            contents &&
            contents.map((item, index) => (
              <CoursePartCard key={item._id} content={item} index={index} />
            ))}
          {isContentsEmpty && <div>Coming soon!</div>}
        </div>
      </>
    );
  }

  return (
    <div className="container mx-auto my-[3.125em] lg:my-20 xl:my-[6.875em]">
      {content}
    </div>
  );
};

export default Course;
