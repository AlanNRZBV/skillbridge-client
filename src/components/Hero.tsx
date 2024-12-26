import { Link } from 'react-router-dom';
import { BoltIcon } from '@heroicons/react/16/solid';
import { icons } from '../constants';
import { useMediaQuery } from 'react-responsive';
import ReactPlayer from 'react-player';
import { useEffect, useState } from 'react';

const CARDS_ARRAY = [
  {
    url: icons.zapier,
    alt: 'zapier icon',
  },
  {
    url: icons.amazon,
    alt: 'amazon icon',
  },
  {
    url: icons.spotify,
    alt: 'spotify icon',
  },
  {
    url: icons.zoom,
    alt: 'zoom icon',
  },
  {
    url: icons.adobe,
    alt: 'adobe icon',
  },
  {
    url: icons.notion,
    alt: 'notion icon',
  },
  {
    url: icons.netflix,
    alt: 'netflix icon',
  },
];

const Hero = () => {
  const isBelowSm = useMediaQuery({ query: '(max-width: 639px)' });
  const isMdToLg = useMediaQuery({
    query: '(min-width: 640px) and (max-width: 1023px)',
  });
  const isAboveLg = useMediaQuery({ query: '(min-width: 1024px)' });
  const [index, setIndex] = useState(CARDS_ARRAY.length);
  useEffect(() => {
    if (isBelowSm) {
      setIndex(3); // До 640px
      return;
    }
    if (isMdToLg) {
      setIndex(5); // От 640px до 1024px
      return;
    }
    if (isAboveLg) {
      setIndex(CARDS_ARRAY.length); // От 1024px и выше - начальный стейт
      return;
    }
  }, [isBelowSm, isMdToLg, isAboveLg]);

  return (
    <div className="container mx-auto pt-[3.125em] md:pt-20">
      <div className="mb-[50px] flex flex-col items-center gap-y-4">
        <div className="relative flex flex-col">
          <img
            src={icons.abstractLines}
            alt="insight logo"
            className="absolute h-[43px] w-[39px] -translate-x-[10px] -translate-y-[20px] md:-translate-x-[24px] md:-translate-y-[30px]"
          />
          <div className="flex items-center gap-[10px] rounded-lg border border-light-95 bg-light-99 p-[14px] md:p-3">
            <div className="h-auto w-12 bg-primary-95 p-3">
              <BoltIcon className="text-dark-15-dark-15" />
            </div>
            <span className="text-base font-semibold md:text-[36px]">
              <b className="font-semibold text-primary-50">Unlock</b> Your
              Creative Potential
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-[6px] px-[30px] text-center text-dark-15">
          <h1 className="text-2xl font-medium leading-[150%] md:text-nowrap md:text-[28px]">
            with Online Design and Development Courses.
          </h1>
          <span className="text-[14px] md:text-base">
            Learn from Industry Experts and Enhance Your Skills.
          </span>
        </div>
      </div>
      <div className="mb-[30px] flex justify-center gap-x-3 text-[14px] lg:mb-[100px]">
        <Link
          to="#"
          className="rounded-md bg-primary-50 px-5 py-[14px] text-white"
        >
          Explore Courses
        </Link>
        <Link to="#" className="rounded-md bg-white px-5 py-[14px]">
          View Pricing
        </Link>
      </div>
      <div className="mb-[30px] grid grid-cols-3 rounded-lg border border-light-95 bg-light-99 p-[10px] sm:grid-cols-5 lg:mb-[100px] lg:grid-cols-7 xl:p-[30px]">
        {CARDS_ARRAY.slice(0, index).map((item, index) => (
          <div
            key={index}
            className="border-r border-light-95 px-[30px] py-5 last:border-0 lg:px-10 lg:py-[30px]"
          >
            <img
              src={item.url}
              alt={item.alt}
              className="h-[28px] w-full lg:h-[34px]"
            />
          </div>
        ))}
      </div>
      <div className="relative overflow-hidden rounded-[10px] pt-[56.25%]">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=4N4_tYpIBrs&ab_channel=ChaosCorona"
          width="100%"
          height="100%"
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
      </div>
    </div>
  );
};

export default Hero;
