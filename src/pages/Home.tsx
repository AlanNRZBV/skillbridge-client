import Hero from '../components/Hero.tsx';
import Section from '../components/Section.tsx';
import { BENEFITS_CARDS, FAQ, Lorem } from '../constants';
import BenefitCard from '../components/Cards/BenefitCard.tsx';
import CourseCard from '../components/Cards/CourseCard.tsx';
import TestimonialCard from '../components/Cards/TestimonialCard.tsx';
import React, { useEffect, useState } from 'react';
import PricingCard from '../components/Cards/PricingCard.tsx';
import FaqCard from '../components/Cards/FaqCard.tsx';
import { useGetPricingPlanQuery } from '../api/api.ts';
import { useGetReviewsQuery } from '../features/review/reviewApi.ts';
import { useGetCoursesQuery } from '../features/course/courseApi.ts';

export const faqDescription =
  'Still you have any questions? Contact our Team via support@skillbridge.com';

const Home = () => {
  const [isMonthly, setIsMonthly] = useState<boolean>(true);
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [courses, setCourses] = useState<ICourse[]>([]);

  const {
    data: pricingPlansResponse,
    isLoading: isPlansLoading,
    isSuccess: isPlansSuccess,
    isError: isPlansError,
  } = useGetPricingPlanQuery();
  const { data: reviewsResponse, isLoading: isReviewsLoading } =
    useGetReviewsQuery();
  const {
    data: coursesResponse,
    isError: isCoursesError,
    isLoading: isCoursesLoading,
    isSuccess: isCoursesSuccess,
  } = useGetCoursesQuery();

  useEffect(() => {
    if (!isReviewsLoading && reviewsResponse !== undefined) {
      setReviews(reviewsResponse.reviews);
    }
  }, [isReviewsLoading, reviewsResponse]);

  useEffect(() => {
    if (!isCoursesLoading && coursesResponse !== undefined) {
      setCourses(coursesResponse.courses);
    }
  }, [isCoursesLoading, coursesResponse]);

  const isReviewsEmpty = reviews.length === 0;
  const isCoursesEmpty = courses.length === 0;

  const pricingPlanChange = () => {
    setIsMonthly((prevState) => !prevState);
  };

  let plansContent: React.ReactNode;

  if (isPlansLoading) {
    plansContent = <div>some shit is loading right now</div>;
  } else if (isPlansSuccess) {
    const { plans } = pricingPlansResponse;
    plansContent = plans.map((item: IPricingPlan) => (
      <PricingCard
        key={item._id}
        isMonthly={isMonthly}
        _id={item._id}
        type={item.type}
        name={item.name}
        perMonth={item.perMonth}
        perYear={item.perYear}
        features={item.features}
      />
    ));
  } else if (isPlansError) {
    plansContent = <div>something went wrong</div>;
  }

  return (
    <div className="container mx-auto flex h-full flex-col gap-y-[3.125em] lg:gap-y-[6.25em] 2xl:gap-y-[9.375em]">
      <Hero />
      <Section title="benefits" description={Lorem}>
        <div className="grid grid-cols-1 gap-[1.875em] sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS_CARDS.map((item, index) => (
            <BenefitCard
              key={index}
              number={item.id}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          ))}
        </div>
      </Section>
      <Section title="our courses" description={Lorem} link="/courses">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {isCoursesLoading && <span>Courses loading</span>}
          {courses &&
            !isCoursesEmpty &&
            courses.map((item) => <CourseCard key={item._id} course={item} />)}
          {isCoursesSuccess && isCoursesEmpty && <span>courses is empty</span>}
          {isCoursesError && <span>Error during courses loading</span>}
        </div>
      </Section>
      <Section title="our testimonials" description={Lorem}>
        <div className="grid gap-5 md:grid-cols-2">
          {isReviewsLoading && <span>Reviews loading</span>}
          {reviews &&
            !isReviewsEmpty &&
            reviews
              .slice(0, 4)
              .map((item) => (
                <TestimonialCard
                  key={item._id}
                  _id={item._id}
                  content={item.content}
                  authorId={item.authorId}
                  courseId={item.courseId}
                />
              ))}
        </div>
      </Section>
      <Section
        title="Our Pricing"
        description={Lorem}
        link="/pricing"
        controls
        isMonthly={isMonthly}
        onClick={pricingPlanChange}
      >
        <div className="flex flex-col gap-y-[30px] rounded-xl bg-white p-5 xl:flex-row xl:gap-x-[30px] xl:p-[3.125em] 2xl:p-20">
          {plansContent}
        </div>
      </Section>
      <Section
        title="Frequently Asked Questions"
        description={faqDescription}
        link="#"
        isFaq
      >
        <div className="flex flex-col gap-y-5 xl:col-span-2 2xl:gap-y-[1.875em]">
          {FAQ.map((item) => (
            <FaqCard
              key={item._id}
              _id={item._id}
              question={item.question}
              answer={item.answer}
              linkTitle={item.linkTitle}
              link={item.link}
            />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Home;
