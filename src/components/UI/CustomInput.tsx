import React, { FC, useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/16/solid';
import { NavLink, useLocation } from 'react-router-dom';
import { ZodIssue } from 'zod';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  required?: boolean;
  id: string;
  name: string;
  value?: string | number | undefined;
  isPassword?: boolean;
  isError?: boolean;
  style?: string;
  validationErrors: ZodIssue[];
}
const CustomInput: FC<Props> = ({
  placeholder,
  onChange,
  type,
  disabled,
  label,
  required,
  id,
  name,
  value,
  isPassword,
  style,
  isError,
  validationErrors,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleShow = () => {
    setIsVisible((prevState) => !prevState);
  };

  const { pathname } = useLocation();

  const isValidationErrorsExist = validationErrors.length === 0;
  return (
    <div
      className={`flex flex-col gap-y-[.625em] xl:gap-y-[.875em] ${style ? style : ''}`}
    >
      <label
        htmlFor={id}
        className="text-sm font-medium capitalize text-dark-15 lg:text-base xl:text-lg"
      >
        {label}
      </label>
      <div
        className={`flex rounded-lg border border-light-95 bg-light-99 p-5 xl:p-6 ${isError ? 'border-red-300' : ''}`}
      >
        <input
          onChange={onChange}
          placeholder={placeholder}
          type={type === 'password' && isVisible ? 'text' : type}
          required={required}
          disabled={disabled}
          name={name}
          id={id}
          {...(type !== 'file' && { value })}
          className={`flex-grow appearance-none bg-transparent outline-0 placeholder:text-sm placeholder:capitalize placeholder:text-dark-40 lg:placeholder:text-base xl:placeholder:text-lg`}
        />
        {type === 'password' &&
          (!isVisible ? (
            <EyeIcon onClick={handleShow} className="h-5 w-5" />
          ) : (
            <EyeSlashIcon onClick={handleShow} className="h-5 w-5" />
          ))}
      </div>
      {!isValidationErrorsExist &&
        validationErrors.map((item, index) => {
          if (item.path[0] === name) {
            return (
              <span className="self-end text-sm text-red-400" key={index}>
                {item.message}
              </span>
            );
          }
        })}
      {isPassword && pathname === '/login' && (
        <NavLink
          className="self-end text-sm text-dark-30 lg:text-base xl:text-lg"
          to="#"
        >
          Forgot Password?
        </NavLink>
      )}
    </div>
  );
};

export default CustomInput;
