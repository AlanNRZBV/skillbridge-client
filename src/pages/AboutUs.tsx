import { useGetAboutDataQuery } from '../features/about/aboutApi.ts';
import AboutSection from '../components/AboutSection.tsx';
import { NavLink } from 'react-router-dom';

const AboutUs = () => {
  const { data, isError, isSuccess, isLoading } = useGetAboutDataQuery();

  let content;

  if (isError) {
    content = <div>Something went wrong</div>;
  }

  if (isLoading) {
    content = <div>Loading...</div>;
  }

  console.log('=>(AboutUs.tsx:17) data', data);

  if (isSuccess && data) {
    const {
      aboutData: { title, description, section },
    } = data;

    const isSectionsEmpty = section.length === 0;

    content = (
      <>
        <div className="mb-[3.125em] flex flex-col gap-y-4 border-b border-light-90 pb-[1.875em] lg:mb-20 lg:grid lg:grid-cols-2 lg:gap-x-20 lg:pb-10 xl:mb-[6.25em] xl:pb-[3.125em]">
          <h3 className="self-center text-[1.75rem] font-semibold text-dark-15 lg:text-[2.375rem] xl:text-5xl">
            {title}
          </h3>
          <p className="text-sm text-dark-35 lg:text-base xl:text-lg">
            {description}
          </p>
        </div>
        <div className="mb-[3.125em] flex flex-col gap-y-[3.125em] lg:mb-[3.75em] xl:mb-20 xl:gap-y-44">
          {!isSectionsEmpty &&
            section &&
            section.map((item) => (
              <AboutSection key={item._id} sectionData={item} />
            ))}
          {isSectionsEmpty && <div>Coming soon!</div>}
        </div>
        <div className="flex flex-col gap-y-10 overflow-hidden rounded-[.625em] bg-white p-[1.875em] lg:flex-row lg:gap-x-[18.75em] lg:p-[3.75em] xl:p-20">
          <div className="flex flex-col gap-y-2.5 xl:gap-y-5">
            <span className="text-[1.75rem] font-semibold text-dark-15 lg:text-[2.375rem] xl:text-5xl">
              <b className="text-primary-50">Together</b>, let's shape the
              future of digital innovation
            </span>
            <p className="text-sm text-dark-30 lg:text-base xl:text-lg">
              Join us on this exciting learning journey and unlock your
              potential in design and development.
            </p>
          </div>
          <NavLink
            to="/sign-up"
            className="shrink-0 self-start rounded-md bg-primary-50 px-5 py-3.5 capitalize text-white lg:self-center"
          >
            join now
          </NavLink>
        </div>
      </>
    );
  }

  return (
    <div className="container mx-auto my-[3.125em] lg:my-20 xl:my-[6.875em]">
      {content}
    </div>
  );
};

export default AboutUs;
