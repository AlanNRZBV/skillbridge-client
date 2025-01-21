import React, { ChangeEvent, FC, useState } from 'react';
import CustomInput from '../UI/CustomInput.tsx';
import { ArrowUpRightIcon, CheckIcon } from '@heroicons/react/16/solid';
import { icons } from '../../constants';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  useLoginMutation,
  useSignUpMutation,
} from '../../features/user/userApi.ts';

interface Props {
  formType: 'sign-up' | 'login';
}

interface ILoginState {
  email: string;
  password: string;
}
interface ISignUpState extends ILoginState {
  firstName: string;
  lastName: string;
  profilePicture: string | undefined;
}

const loginInitialState: ILoginState = {
  email: '',
  password: '',
};

const signUpInitialState: ISignUpState = {
  email: '',
  firstName: '',
  lastName: '',
  profilePicture: undefined,
  password: '',
};

//TODO ADD REMEMBER ME FUNC

const UserForm: FC<Props> = ({ formType }) => {
  const isLogin = formType === 'login';

  const initialState = isLogin ? loginInitialState : signUpInitialState;

  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [form, setForm] = useState<ILoginState | ISignUpState>(initialState);

  const [login] = useLoginMutation();
  const [signUp] = useSignUpMutation();
  const navigate = useNavigate();

  const checkHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isLogin && 'firstName' in form) {
      const formData = new FormData();

      Object.keys(form).forEach((key) => {
        const value = form[key as keyof IUserMutation];
        if (
          key === 'profilePicture' &&
          value &&
          typeof value === 'object' &&
          'size' in value
        ) {
          formData.append(key, value as File);
        } else if (value !== undefined && value !== null) {
          formData.append(key, value);
        }
      });

      signUp(formData);
    } else {
      try {
        await login(form);
        navigate('/');
      } catch (e) {}
    }
    setForm(initialState);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    setForm((prevData) => ({
      ...prevData,
      [name]: name === 'profilePicture' && files ? files[0] : value,
    }));
  };

  const acceptTerms = (
    <>
      I agree with <b className="font-normal underline">Terms of Use</b> and{' '}
      <b className="font-normal underline">Privacy Policy</b>
    </>
  );

  const googleLink = isLogin ? (
    <>
      Don't have an account? <b className="font-medium underline">Sign Up</b>{' '}
    </>
  ) : (
    <>
      Already have an account? <b className="font-medium underline">Login</b>{' '}
    </>
  );

  return (
    <>
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-y-5 xl:gap-y-6"
        encType="multipart/form-data"
      >
        {!isLogin && 'firstName' in form && (
          <>
            <CustomInput
              onChange={onChange}
              type="text"
              placeholder="enter your name"
              label="first name"
              required
              id="firstName"
              name="firstName"
              value={form.firstName}
            />
            <CustomInput
              onChange={onChange}
              type="text"
              placeholder="enter your last name"
              label="last name"
              required
              id="lastName"
              name="lastName"
              value={form.lastName}
            />
          </>
        )}
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
        {!isLogin && 'firstName' in form && (
          <>
            <CustomInput
              onChange={onChange}
              type="file"
              placeholder="Add profile picture"
              label="profile picture"
              id="userProfilePicture"
              name="profilePicture"
            />
          </>
        )}
        <div className="flex items-center gap-x-2">
          <div className="relative inline-flex items-center justify-center">
            <input
              onChange={checkHandler}
              checked={isChecked}
              type="checkbox"
              name={isLogin ? 'termsAndPolicy' : 'rememberMe'}
              id="termsAndPolicy"
              className="peer h-6 w-6 appearance-none rounded border border-light-95 bg-light-97 checked:bg-primary-50"
            />
            <CheckIcon className="pointer-events-none absolute hidden h-[18px] w-[18px] text-white peer-checked:block" />
          </div>
          <label
            htmlFor={isLogin ? 'termsAndPolicy' : 'rememberMe'}
            className="cursor-pointer text-sm text-dark-40 lg:text-base xl:text-[1.125rem]"
          >
            {isLogin ? <>Remember me</> : acceptTerms}
          </label>
        </div>
        <button
          type="submit"
          className="appearance-none rounded-md bg-primary-50 px-[.625em] py-[.875em] text-center text-sm font-medium capitalize text-white xl:px-5 xl:py-[1.125em] xl:text-[1.125rem]"
        >
          {isLogin ? 'login' : 'sign up'}
        </button>
      </form>
      <div className="flex items-center gap-x-3">
        <div className="h-[1px] w-full bg-light-90"></div>
        <span className="text-sm uppercase text-dark-60">or</span>
        <div className="h-[1px] w-full bg-light-90"></div>
      </div>
      <button
        type="button"
        className="flex appearance-none items-center justify-center gap-x-[.875em] rounded-md border border-light-95 bg-light-97 p-6 py-4 xl:px-5 xl:py-[1.125em] xl:text-[1.125rem]"
      >
        <img
          className="h-6 w-6"
          src={icons.googleSignUp}
          alt="google Sign Up Button"
        />
        <span>{isLogin ? 'Login' : 'Sign Up'} with Google</span>
      </button>
      <NavLink
        to="/sign-up"
        className="flex items-center justify-center gap-x-1.5 text-sm text-dark-15 lg:text-base xl:text-[1.125rem]"
      >
        {googleLink}
        <ArrowUpRightIcon className="h-5 w-5" />
      </NavLink>
    </>
  );
};

export default UserForm;
