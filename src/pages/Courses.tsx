import { useEffect, useState } from 'react';
import { useGetCoursesQuery } from '../features/course/courseApi.ts';
import CourseCardExtended from '../components/Cards/CourseCardExtended.tsx';
import PageHeading from '../components/PageHeading.tsx';
import { Headings } from '../constants';

const Courses = () => {
  const [courses, setCourses] = useState<ICourse[]>([]);

  const {
    data: coursesResponse,
    isError: isCoursesError,
    isLoading: isCoursesLoading,
    isSuccess: isCoursesSuccess,
  } = useGetCoursesQuery();

  useEffect(() => {
    if (!isCoursesLoading && coursesResponse !== undefined) {
      setCourses(coursesResponse.courses);
    }
  }, [isCoursesLoading, coursesResponse]);

  const isCoursesEmpty = courses.length === 0;
  return (
    <div className="container mx-auto my-[3.125em] lg:my-20 2xl:my-[8.25em]">
      <PageHeading
        title={Headings.courses.title}
        description={Headings.courses.description}
      />
      <div className="flex flex-col gap-y-5 lg:gap-y-10 2xl:gap-y-[3.125em]">
        {isCoursesLoading && <span>Courses loading</span>}
        {courses &&
          !isCoursesEmpty &&
          courses.map((item, index) => (
            <CourseCardExtended key={index} course={item} />
          ))}
        {isCoursesSuccess && isCoursesEmpty && <span>courses is empty</span>}
        {isCoursesError && <span>Error during courses loading</span>}
      </div>
    </div>
  );
};

export default Courses;
