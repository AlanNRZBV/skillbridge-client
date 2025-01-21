import SmallTestimonials from '../components/Testimonials/SmallTestimonials.tsx';
import UserForm from '../components/Forms/UserForm.tsx';
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const UserFormContainer = () => {
  const { pathname } = useLocation();

  const greetingString =
    pathname === '/login'
      ? 'Welcome back! Please log in to access your account.'
      : 'Create an account to unlock exclusive features.';

  const isLg = useMediaQuery({ minWidth: 1024 });

  return (
    <section className="container mx-auto my-[3.125em] flex flex-col gap-y-[3.25em] lg:my-20 lg:grid lg:grid-cols-2 lg:gap-x-20 xl:my-[6.25em] xl:gap-x-[6.25em]">
      <div
        className={`flex flex-col gap-y-[1.125em] rounded-[10px] bg-white p-[1.125em] lg:gap-y-10 lg:p-10 xl:gap-y-[3.125em] xl:p-[3.125em] ${isLg ? 'order-last' : ''}`}
      >
        <div className="flex flex-col gap-y-2 text-center xl:gap-y-3">
          <h1 className="text-[1.75rem] font-semibold capitalize text-dark-15 lg:text-[2.375em] lg:font-semibold xl:text-5xl">
            {pathname === '/login' ? 'login' : 'sign up'}
          </h1>
          <span className="text-sm text-dark-30 lg:text-base xl:text-[1.125rem]">
            {greetingString}
          </span>
        </div>
        <div className="flex flex-col gap-y-6 xl:gap-y-[1.875em]">
          <UserForm formType={pathname === '/login' ? 'login' : 'sign-up'} />
        </div>
      </div>
      <SmallTestimonials />
    </section>
  );
};

export default UserFormContainer;
