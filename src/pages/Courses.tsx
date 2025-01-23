import { useEffect, useState } from 'react';
import { useGetCoursesQuery } from '../features/course/courseApi.ts';
import CourseCardExtended from '../components/Cards/CourseCardExtended.tsx';

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
    <div className="container mx-auto my-[3.125em]">
      <div className="mb-[3.125em] flex flex-col gap-y-4 border-b border-b-light-90 pb-[1.875em]">
        <h3 className="text-[1.75rem] font-semibold text-dark-15">
          Online Courses on Design and Development
        </h3>
        <p className="text-sm text-dark-35">
          Welcome to our online course page, where you can enhance your skills
          in design and development. Choose from our carefully curated selection
          of 10 courses designed to provide you with comprehensive knowledge and
          practical experience. Explore the courses below and find the perfect
          fit for your learning journey.
        </p>
      </div>
      <div className="flex flex-col gap-y-5">
        {isCoursesLoading && <span>Courses loading</span>}
        {courses &&
          !isCoursesEmpty &&
          courses.map((item) => (
            <CourseCardExtended key={item._id} course={item} />
          ))}
        {isCoursesSuccess && isCoursesEmpty && <span>courses is empty</span>}
        {isCoursesError && <span>Error during courses loading</span>}
      </div>
    </div>
  );
};

export default Courses;
