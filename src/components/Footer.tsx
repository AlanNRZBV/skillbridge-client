import { footerLinks, icons } from '../constants';
import { Link, NavLink } from 'react-router-dom';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/16/solid';

const Footer = () => {
  return (
    <div className="container mx-auto pt-[50px]">
      <div className="flex flex-col gap-y-6 border-b border-light-95 sm:flex-row sm:justify-between md:pb-[30px] lg:pb-[50px]">
        <div className="flex flex-col gap-y-[30px] lg:gap-y-10">
          <NavLink to="/" className="mr-[50px] shrink-0">
            <img
              src={icons.mainMobile}
              alt="Skillbridge logo"
              className="h-auto w-10 lg:w-[44px] xl:w-[54px]"
            />
          </NavLink>
          <div className="flex flex-col gap-y-3 lg:gap-5">
            <div className="flex items-center gap-x-[6px]">
              <EnvelopeIcon className="h-auto w-6 text-dark-15" />
              <Link
                to="mailto:hello@skillbridge.com"
                className="text-[15px] md:text-base lg:text-[18px]"
              >
                hello@skillbridge.com
              </Link>
            </div>
            <div className="flex items-center gap-x-[6px]">
              <PhoneIcon className="h-auto w-6 text-dark-15" />
              <Link
                to="tel:+91 91813 23 2309"
                className="text-[15px] md:text-base lg:text-[18px]"
              >
                +91 91813 23 2309
              </Link>
            </div>
            <div className="flex items-center gap-x-[6px]">
              <MapPinIcon className="h-auto w-6 text-dark-15" />
              <Link to="#" className="text-[15px] md:text-base lg:text-[18px]">
                Somewhere there
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-y-6 pb-5 sm:gap-6 md:grid-cols-3 md:gap-0">
          {footerLinks.map((item, index) => (
            <div
              className="flex flex-col gap-y-[10px] lg:gap-y-[14px]"
              key={index}
            >
              <span className="text-[18px] font-semibold text-dark-15 lg:text-xl">
                {item.title}
              </span>
              <div className="flex flex-col gap-y-2 text-[14px] text-dark-35 md:text-base">
                {item.links.map((link, index) => (
                  <NavLink key={index} to={link.to}>
                    {link.title}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
          <div className="col-span-2 flex flex-col gap-y-[10px] md:col-auto lg:gap-y-[14px]">
            <span className="text-[18px] font-semibold lg:text-xl">
              Social Profiles
            </span>
            <div className="flex gap-x-[10px] md:gap-x-[14px]">
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
          </div>
        </div>
      </div>
      <span className="mt-5 block pb-6 text-center text-[14px] text-dark-40 md:mt-[30px] lg:mt-[50px] lg:text-[18px]">
        © 2023 Skillbridge. All rights reserved.
      </span>
    </div>
  );
};

export default Footer;
