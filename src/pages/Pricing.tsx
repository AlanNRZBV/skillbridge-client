import PageHeading from '../components/PageHeading.tsx';
import { FAQ, Headings } from '../constants';
import { useGetPricingPlanQuery } from '../api/api.ts';
import PricingCard from '../components/Cards/PricingCard.tsx';
import { useState } from 'react';
import FaqCard from '../components/Cards/FaqCard.tsx';
import Section from '../components/Section.tsx';
import { faqDescription } from './Home.tsx';

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState<boolean>(true);

  const {
    data: pricingPlansResponse,
    isLoading: isPlansLoading,
    isSuccess: isPlansSuccess,
    isError: isPlansError,
    error,
  } = useGetPricingPlanQuery();

  const active = 'rounded-md bg-primary-50 text-white';

  let plansContent;

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
    plansContent = <div>here we ago again {error?.toString()}</div>;
  }

  const pricingPlanChange = () => {
    setIsMonthly((prevState) => !prevState);
  };

  return (
    <div className="container mx-auto my-[3.125em] lg:my-20">
      <PageHeading
        title={Headings.pricing.title}
        description={Headings.pricing.description}
      />
      <div className="mb-[3.125em] flex flex-col gap-y-10">
        <div className="self-center rounded-lg bg-white p-3 text-sm font-medium sm:flex xl:text-lg">
          <button
            onClick={pricingPlanChange}
            className={`rounded-md px-6 py-3 capitalize transition duration-200 ease-in-out xl:px-[1.875em] xl:py-[.875em] ${isMonthly ? active : ''}`}
            disabled={isMonthly}
          >
            monthly
          </button>
          <button
            onClick={pricingPlanChange}
            className={`rounded-md px-6 py-3 capitalize transition duration-200 ease-in-out xl:px-[1.875em] xl:py-[.875em] ${!isMonthly ? active : ''}`}
            disabled={!isMonthly}
          >
            yearly
          </button>
        </div>
        <div className="flex flex-col gap-y-[1.875em] rounded-xl bg-white p-3 lg:grid lg:grid-cols-2 lg:gap-x-[1.875em] lg:p-[3.125em]">
          {plansContent}
        </div>
      </div>
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

export default Pricing;
