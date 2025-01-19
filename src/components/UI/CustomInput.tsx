import React, { FC, useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/16/solid';
import { NavLink } from 'react-router-dom';

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
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleShow = () => {
    setIsVisible((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col gap-y-[.625em]">
      <label
        htmlFor={id}
        className="text-[.875rem] font-medium capitalize text-dark-15"
      >
        {label}
      </label>
      <div className="flex rounded-lg border border-light-95 bg-light-99 p-5">
        <input
          onChange={onChange}
          placeholder={placeholder}
          type={type === 'password' && isVisible ? 'text' : type}
          required={required}
          disabled={disabled}
          name={name}
          id={id}
          {...(type !== 'file' && { value })}
          className="flex-grow appearance-none bg-transparent outline-0 placeholder:text-[.875rem] placeholder:capitalize placeholder:text-dark-40"
        />
        {type === 'password' &&
          (!isVisible ? (
            <EyeIcon onClick={handleShow} className="h-5 w-5" />
          ) : (
            <EyeSlashIcon onClick={handleShow} className="h-5 w-5" />
          ))}
      </div>
      {isPassword && (
        <NavLink className="self-end text-sm text-dark-30" to="#">
          Forgot Password?
        </NavLink>
      )}
    </div>
  );
};

export default CustomInput;
