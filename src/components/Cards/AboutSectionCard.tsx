import { FC } from 'react';
import { iconUrl } from '../../constants';

interface Props {
  data: IAboutCard;
}

const AboutSectionCard: FC<Props> = ({
  data: { title, description, icon },
}) => {
  return (
    <div className="flex flex-col gap-y-6 rounded-[.625em] bg-white p-[1.875em] lg:p-10 xl:gap-y-[1.875em] xl:p-[3.125em]">
      <div className="h-[56px] w-[56px] rounded-md border border-primary-90 bg-primary-97 p-3.5 xl:h-[66px] xl:w-[66px] xl:p-4">
        <img src={`${iconUrl}${icon}`} alt={title} />
      </div>
      <div className="flex flex-col gap-y-1.5 lg:gap-y-2.5 xl:gap-y-3.5">
        <span className="text-lg font-medium text-dark-15 lg:text-xl xl:text-2xl">
          {title}
        </span>
        <p className="text-sm text-dark-35 lg:text-base xl:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AboutSectionCard;
