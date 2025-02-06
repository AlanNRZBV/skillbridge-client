import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import CustomInput from '../UI/CustomInput.tsx';
import { ArrowUpRightIcon, CheckIcon } from '@heroicons/react/16/solid';
import { icons } from '../../constants';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  useLoginMutation,
  useSignUpMutation,
} from '../../features/user/userApi.ts';
import { toast, TypeOptions } from 'react-toastify';
import { userLoginSchema, userSignUpSchema } from '../../zod/userSchemes.ts';
import { ZodError, ZodIssue } from 'zod';

interface Props {
  formType: 'sign-up' | 'login';
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
  const [validationErrors, setValidationErrors] = useState<ZodIssue[]>([]);
  const [
    login,
    { error: loginError, isSuccess: isLoginSuccess, data: loginResponse },
  ] = useLoginMutation();
  const [
    signUp,
    { error: signUpError, isSuccess: isSignUpSuccess, data: signUpResponse },
  ] = useSignUpMutation();
  const navigate = useNavigate();

  const notify = (arg: string, type: TypeOptions) => toast(arg, { type: type });

  const checkHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  useEffect(() => {
    if (loginError && 'status' in loginError && loginError.status === 404) {
      const error = loginError.data as { message: string };

      notify(error.message, 'error');
    }
    if (isLoginSuccess) {
      const msg = loginResponse.message;

      notify(msg, 'success');
    }
    if (isSignUpSuccess && !('errorResponse' in signUpResponse)) {
      const msg = signUpResponse.message;
      notify(msg, 'success');
      navigate('/login');
    }
    if (signUpResponse && 'errorResponse' in signUpResponse) {
      const {
        errorResponse: {
          keyValue: { email },
        },
      } = signUpResponse as IUserUniqueErrorResponse;

      notify(`User with email:${email} Already exists`, 'error');
    }
    if (signUpError && 'status' in signUpError) {
      const {
        errors: {
          password: {
            properties: { message },
          },
        },
      } = signUpError.data as IUserMongoErrorResponse;

      notify(message, 'error');
    }
  }, [
    loginError,
    isSignUpSuccess,
    navigate,
    signUpError,
    isLoginSuccess,
    signUpResponse,
  ]);

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

      try {
        try {
          userSignUpSchema.parse(form);
        } catch (e) {
          if (e instanceof ZodError) {
            setValidationErrors(e.errors);
            return;
          }
          console.log('=>(UserForm.tsx:158) e', e);
        }
        await signUp(formData);
      } catch (e) {
        console.log('=>(UserForm.tsx:135) e', e);
      }
    } else {
      try {
        try {
          userLoginSchema.parse(form);
        } catch (e) {
          if (e instanceof ZodError) {
            setValidationErrors(e.errors);
            return;
          }
          console.log('=>(UserForm.tsx:147) e', e);
        }
        await login(form);
        if (isLoginSuccess) {
          navigate('/');
        }
      } catch (e) {
        console.log('=>(UserForm.tsx:83) error', e);
      }
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
              id="firstName"
              name="firstName"
              required
              value={form.firstName}
              validationErrors={validationErrors}
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
              validationErrors={validationErrors}
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
          isError={
            loginError && 'status' in loginError && loginError.status === 404
          }
          value={form.email}
          validationErrors={validationErrors}
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
          validationErrors={validationErrors}
          isError={
            loginError && 'status' in loginError && loginError.status === 404
          }
        />
        {!isLogin && 'firstName' in form && (
          <>
            <CustomInput
              validationErrors={validationErrors}
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
            className="cursor-pointer text-sm text-dark-40 lg:text-base xl:text-lg"
          >
            {isLogin ? <>Remember me</> : acceptTerms}
          </label>
        </div>
        <button
          type="submit"
          className="appearance-none rounded-md bg-primary-50 px-[.625em] py-[.875em] text-center text-sm font-medium capitalize text-white xl:px-5 xl:py-[1.125em] xl:text-lg"
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
        className="flex appearance-none items-center justify-center gap-x-[.875em] rounded-md border border-light-95 bg-light-97 p-6 py-4 xl:px-5 xl:py-[1.125em] xl:text-lg"
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
        className="flex items-center justify-center gap-x-1.5 text-sm text-dark-15 lg:text-base xl:text-lg"
      >
        {googleLink}
        <ArrowUpRightIcon className="h-5 w-5" />
      </NavLink>
    </>
  );
};

export default UserForm;
