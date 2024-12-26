import Hero from '../components/Hero.tsx';
import Section from '../components/Section.tsx';
import {
  BENEFITS_CARDS,
  COURSES_CARDS,
  FAQ,
  Lorem,
  TESTIMONIALS_CARDS,
} from '../constants';
import BenefitCard from '../components/Cards/BenefitCard.tsx';
import CourseCard from '../components/Cards/CourseCard.tsx';
import TestimonialCard from '../components/Cards/TestimonialCard.tsx';
import React, { useState } from 'react';
import PricingCard from '../components/Cards/PricingCard.tsx';
import FaqCard from '../components/Cards/FaqCard.tsx';
import { useGetPricingPlanQuery } from '../features/api/apiSlice.ts';

const faqDescription =
  'Still you have any questions? Contact our Team via support@skillbridge.com';

const Home = () => {
  const [isMonthly, setIsMonthly] = useState<boolean>(true);

  const { data, isLoading, isSuccess, isError, error } =
    useGetPricingPlanQuery();

  const pricingPlanChange = () => {
    setIsMonthly((prevState) => !prevState);
  };

  let plansContent: React.ReactNode;

  if (isLoading) {
    plansContent = <div>some shit is loading right now</div>;
  } else if (isSuccess) {
    const { plans } = data;
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
  } else if (isError) {
    plansContent = <div>here we ago again {error?.toString()}</div>;
  }

  return (
    <div className="flex h-full flex-col gap-y-[3.125em] lg:gap-y-[6.25em] 2xl:gap-y-[9.375em]">
      <Hero />
      <Section title="benefits" description={Lorem} link="#">
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
      <Section title="our courses" description={Lorem} link="#">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {COURSES_CARDS.map((item) => (
            <CourseCard
              key={item._id}
              _id={item._id}
              img={item.img}
              title={item.title}
              description={item.description}
              difficulty={item.difficulty}
              length={item.length}
              author={item.author}
            />
          ))}
        </div>
      </Section>
      <Section title="our testimonials" description={Lorem} link="#">
        <div className="grid gap-5 md:grid-cols-2">
          {TESTIMONIALS_CARDS.map((item) => (
            <TestimonialCard
              key={item._id}
              _id={item._id}
              img={item.img}
              author={item.author}
              content={item.content}
            />
          ))}
        </div>
      </Section>
      <Section
        title="Our Pricing"
        description={Lorem}
        link="#"
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
