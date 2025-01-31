import { useParams } from 'react-router-dom';
import { useGetCourseByIdQuery } from '../features/course/courseApi.ts';
import ReactPlayer from 'react-player';
import CoursePartCard from './Cards/CoursePartCard.tsx';
import PageHeading from './PageHeading.tsx';
import NoContent from './NoContent.tsx';

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
    const { title, description, contents, mainVideo, released } = data.course;

    content = (
      <>
        <PageHeading title={title} description={description} />
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
          {released &&
            contents &&
            contents.map((item, index) => (
              <CoursePartCard key={item._id} content={item} index={index} />
            ))}
          {!released && <NoContent />}
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
