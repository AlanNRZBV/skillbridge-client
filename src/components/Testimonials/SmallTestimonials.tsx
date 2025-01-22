import { Lorem } from '../../constants';
import { useEffect, useState } from 'react';
import TestimonialCard from '../Cards/TestimonialCard.tsx';
import { ArrowRightIcon } from '@heroicons/react/16/solid';
import { ArrowLeftIcon } from '@heroicons/react/16/solid';
import { useGetReviewsQuery } from '../../features/review/reviewApi.ts';

const SmallTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const { data, isError, isLoading } = useGetReviewsQuery();

  const [reviews, setReviews] = useState<IReview[]>([]);

  useEffect(() => {
    if (!isLoading && data !== undefined) {
      setReviews(data.reviews);
    }
  }, [isLoading, data]);

  const isReviewsEmpty = reviews.length === 0;

  const goNext = () => {
    setCurrentIndex((prevState) => (prevState + 1) % reviews.length);
  };
  const goPrevious = () => {
    setCurrentIndex((prevState) =>
      prevState === 0 ? reviews.length - 1 : prevState - 1,
    );
  };

  return (
    <section className="flex flex-col gap-y-10 lg:gap-y-[3.75em] lg:self-center">
      <div className="flex flex-col gap-y-1">
        <h3 className="text-[1.75rem] font-medium capitalize text-dark-15 lg:text-[1.85rem]">
          students testimonials
        </h3>
        <p className="text-sm text-dark-35 lg:text-base">{Lorem}</p>
      </div>
      <div className="flex flex-1 flex-row overflow-hidden">
        {isLoading && <div>Loading</div>}
        {!isReviewsEmpty && !isError && (
          <TestimonialCard
            authorId={reviews[currentIndex].authorId}
            courseId={reviews[currentIndex].courseId}
            _id={reviews[currentIndex]._id}
            content={reviews[currentIndex].content}
          />
        )}
      </div>
      <div className="flex items-center justify-center gap-x-[.625em] lg:self-end">
        <button
          onClick={goPrevious}
          className="border border-light-95 bg-white p-3"
        >
          <ArrowLeftIcon className="h-[30px] w-[30px] text-dark-15" />
        </button>
        <button
          onClick={goNext}
          className="border border-light-95 bg-white p-3"
        >
          <ArrowRightIcon className="h-[30px] w-[30px] text-dark-15" />
        </button>
      </div>
    </section>
  );
};

export default SmallTestimonials;
