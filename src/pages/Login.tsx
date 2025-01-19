import CustomInput from '../components/UI/CustomInput.tsx';
import { ArrowUpRightIcon, CheckIcon } from '@heroicons/react/16/solid';
import { icons, Lorem } from '../constants';
import { NavLink } from 'react-router-dom';
import React, { ChangeEvent, useState } from 'react';
import { useLoginMutation, useTestQuery } from '../features/user/userApi.ts';

const initialState = {
  email: '',
  password: '',
};

const Login = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [form, setForm] = useState(initialState);

  const [login] = useLoginMutation();
  useTestQuery();
  const checkHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    login(form);
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section className="container mx-auto flex flex-col gap-y-[3.25em]">
      <div className="flex flex-col gap-y-[1.125em] rounded-[10px] bg-white p-[1.125em]">
        <div className="ic flex flex-col gap-y-2 text-center">
          <h1 className="text-[1.75rem] font-semibold capitalize text-dark-15">
            login
          </h1>
          <span className="text-[.875rem] text-dark-30">
            Welcome back! Please log in to access your account.
          </span>
        </div>
        <div className="flex flex-col gap-y-6">
          <form
            onSubmit={submitHandler}
            className="flex flex-col gap-y-5"
            encType="multipart/form-data"
          >
            <CustomInput
              onChange={onChange}
              type="email"
              placeholder="enter your email"
              label="email"
              required
              id="userEmail"
              name="email"
              value={form.email}
            />
            <CustomInput
              onChange={onChange}
              type="password"
              placeholder="enter your password"
              label="password"
              required
              id="userPassword"
              name="password"
              isPassword
              value={form.password}
            />
            <div className="flex items-center gap-x-2">
              <div className="relative inline-flex items-center justify-center">
                <input
                  onChange={checkHandler}
                  checked={isChecked}
                  type="checkbox"
                  name="termsAndPolicy"
                  id="termsAndPolicy"
                  className="peer h-6 w-6 appearance-none rounded border border-light-95 bg-light-97 checked:bg-primary-50"
                />
                <CheckIcon className="pointer-events-none absolute hidden h-[18px] w-[18px] text-white peer-checked:block" />
              </div>
              <label
                htmlFor="termsAndPolicy"
                className="cursor-pointer text-[.875rem] text-dark-40"
              >
                Remember me
              </label>
            </div>
            <button
              type="submit"
              className="appearance-none rounded-md bg-primary-50 px-[.625em] py-[.875em] text-center text-[.875rem] font-medium capitalize text-white"
            >
              login
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
            <span>Login with Google</span>
          </button>
          <NavLink
            to="/sign-up"
            className="flex items-center justify-center gap-x-1.5 text-[.875rem] text-dark-15"
          >
            Don't have an account?{' '}
            <b className="font-medium underline">Sign Up</b>{' '}
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

export default Login;
