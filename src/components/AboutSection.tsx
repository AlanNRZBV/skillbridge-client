import { FC } from 'react';
import AboutSectionCard from './Cards/AboutSectionCard.tsx';
interface Props {
  sectionData: IAboutSection;
}

const AboutSection: FC<Props> = ({
  sectionData: { title, description, cards },
}) => {
  const isCardsEmpty = cards.length === 0;

  return (
    <div className="flex flex-col gap-y-[3.125em] lg:gap-y-[3.75rem] xl:gap-y-20">
      <div className="flex flex-col gap-y-1.5">
        <h4 className="text-2xl font-medium text-dark-20 lg:text-[1.875rem] xl:text-5xl">
          {title}
        </h4>
        <p className="text-sm text-dark-35 lg:text-base xl:text-lg">
          {description}
        </p>
      </div>
      <div className="flex flex-col gap-y-5 lg:grid lg:grid-cols-2 lg:gap-5">
        {!isCardsEmpty &&
          cards.map((item) => <AboutSectionCard key={item._id} data={item} />)}
      </div>
    </div>
  );
};

export default AboutSection;
