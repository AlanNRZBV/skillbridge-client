import CustomInput from '../components/UI/CustomInput.tsx';
import { ArrowUpRightIcon, CheckIcon } from '@heroicons/react/16/solid';
import { ChangeEvent, useState } from 'react';
import { icons, Lorem } from '../constants';
import { NavLink } from 'react-router-dom';

const SignUp = () => {
  const tempFn = () => {};
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const checkHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  return (
    <section className="container mx-auto flex flex-col gap-y-[3.25em]">
      <div className="flex flex-col gap-y-[1.125em] rounded-[10px] bg-white p-[1.125em]">
        <div className="ic flex flex-col gap-y-2 text-center">
          <h1 className="text-[1.75rem] font-semibold capitalize text-dark-15">
            sign up
          </h1>
          <span className="text-[.875rem] text-dark-30">
            Create an account to unlock exclusive features.
          </span>
        </div>
        <div className="flex flex-col gap-y-6">
          <form className="flex flex-col gap-y-5">
            <CustomInput
              onChange={tempFn}
              type="text"
              placeholder="enter your name"
              label="full name"
              required
              id="username"
              name="username"
            />
            <CustomInput
              onChange={tempFn}
              type="email"
              placeholder="enter your email"
              label="email"
              required
              id="userEmail"
              name="userEmail"
            />
            <CustomInput
              onChange={tempFn}
              type="password"
              placeholder="enter your password"
              label="password"
              required
              id="userPassword"
              name="userPassword"
            />
            <div className="flex items-center gap-x-2">
              <div className="relative inline-flex items-center justify-center">
                <input
                  onChange={checkHandler}
                  checked={isChecked}
                  type="checkbox"
                  name="termsAndPolicy"
                  id="termsAndPolicy"
                  required
                  className="peer h-6 w-6 appearance-none rounded border border-light-95 bg-light-97 checked:bg-primary-50"
                />
                <CheckIcon className="pointer-events-none absolute hidden h-[18px] w-[18px] text-white peer-checked:block" />
              </div>
              <label
                htmlFor="termsAndPolicy"
                className="cursor-pointer text-[.875rem] text-dark-40"
              >
                I agree with{' '}
                <b className="font-normal underline">Terms of Use</b> and{' '}
                <b className="font-normal underline">Privacy Policy</b>
              </label>
            </div>
            <button
              type="submit"
              className="appearance-none rounded-md bg-primary-50 px-[.625em] py-[.875em] text-center text-[.875rem] font-medium capitalize text-white"
            >
              sign up
            </button>
          </form>
          <div className="flex items-center gap-x-3">
            <div className="h-[1px] w-full bg-light-90"></div>
            <span className="text-[.875rem] uppercase text-dark-60">or</span>
            <div className="h-[1px] w-full bg-light-90"></div>
          </div>
          <button
            type="button"
            className="flex appearance-none items-center justify-center gap-x-[.875em] rounded-md border border-light-95 bg-light-97 p-6 py-4"
          >
            <img
              className="h-6 w-6"
              src={icons.googleSignUp}
              alt="google Sign Up Button"
            />
            <span>Sign up with Google</span>
          </button>
          <NavLink
            to="/login"
            className="flex items-center justify-center gap-x-1.5 text-[.875rem] text-dark-15"
          >
            Already have an account?{' '}
            <b className="font-medium underline">Login</b>{' '}
            <ArrowUpRightIcon className="h-5 w-5" />
          </NavLink>
        </div>
      </div>
      <div className="flex flex-col gap-y-10">
        <div className="flex flex-col gap-y-1">
          <h3 className="text-2xl font-medium capitalize text-dark-15">
            students testimonials
          </h3>
          <span className="text-[.875rem] text-dark-35">{Lorem}</span>
        </div>
        <div className="flex"></div>
      </div>
    </section>
  );
};

export default SignUp;
