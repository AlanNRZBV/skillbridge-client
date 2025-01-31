import { NavLink } from 'react-router-dom';

const NoContent = () => {
  return (
    <div className="roudned-lg flex flex-col items-center gap-y-4 bg-white p-3 lg:col-span-2 lg:p-6">
      <div className="flex flex-col gap-y-3 self-start lg:gap-y-5">
        <h3 className="text-xl font-semibold text-dark-15 lg:text-[2.375em] 2xl:text-5xl">
          Content is not released yet!
        </h3>
        <p className="text-sm text-dark-35 lg:text-base 2xl:text-lg">
          Don’t worry, everything’s fine! ✨ Part of our content is still in the
          works as we perfect it—stay tuned, it’s coming very soon! In the
          meantime, feel free to explore what’s already available. Thank you for
          your patience and happy browsing!
        </p>
      </div>
      <NavLink
        to={'/courses'}
        className="rounded-md bg-primary-50 px-3 py-2 text-base font-semibold uppercase text-white"
      >
        get me back asap!
      </NavLink>
    </div>
  );
};

export default NoContent;
