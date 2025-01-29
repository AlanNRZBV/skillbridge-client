import { FC } from 'react';
import { Link } from 'react-router-dom';
import { icons } from '../../constants';

interface Props {
  data: IContactCard;
}

const ContactCard: FC<Props> = ({
  data: { title, type, data, icon: Icon },
}) => {
  let hrefString;

  switch (type) {
    case 'email':
      hrefString = `mailto:${data}`;
      break;
    case 'tel':
      hrefString = `tel:${data}`;
      break;
    case 'geodata':
      hrefString = `${data}`;
      break;
    case 'socials':
      hrefString = '#';
      break;
  }

  if (type === 'socials') {
    return (
      <div className="flex flex-col items-center gap-y-2.5 rounded-md border border-light-95 bg-light-99 p-[1.875em] xl:gap-y-3.5">
        <div className="flex gap-x-2.5">
          <Link
            to="#"
            className="flex h-auto w-[44px] items-center justify-center rounded-md border border-light-95 bg-light-97 p-3 lg:w-[52px]"
          >
            <img src={icons.facebook} alt="Facebook link" />
          </Link>
          <Link
            to="#"
            className="flex h-auto w-[44px] items-center justify-center rounded-md border border-light-95 bg-light-97 p-3 lg:w-[52px]"
          >
            <img src={icons.twitter} alt="Twitter link" />
          </Link>
          <Link
            to="#"
            className="flex h-auto w-[44px] items-center justify-center rounded-md border border-light-95 bg-light-97 p-3 lg:w-[52px]"
          >
            <img src={icons.linkedin} alt="LinkedIn link" />
          </Link>
        </div>

        <span className="text-sm text-dark-30 xl:text-base">{title}</span>
      </div>
    );
  }

  return (
    <a
      className="flex flex-col items-center gap-y-2.5 rounded-md border border-light-95 bg-light-99 p-[1.875em] xl:gap-y-3.5"
      href={hrefString}
    >
      <div className="h-[44px] w-[44px] rounded-md border border-light-95 bg-light-97 p-3">
        <Icon />
      </div>
      <span className="text-sm text-dark-30 xl:text-base">{title}</span>
    </a>
  );
};

export default ContactCard;
