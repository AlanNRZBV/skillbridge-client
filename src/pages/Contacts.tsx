import CustomInput from '../components/UI/CustomInput.tsx';
import React, { useState } from 'react';
import { ContactCards } from '../constants';
import ContactCard from '../components/Cards/ContactCard.tsx';

interface IMessageState {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  subject: string;
  message: string;
}

const initialState: IMessageState = {
  email: '',
  firstName: '',
  lastName: '',
  message: '',
  phoneNumber: 996,
  subject: '',
};

const Contacts = () => {
  const [form, setForm] = useState<IMessageState>(initialState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="container mx-auto my-[3.125em] xl:my-20 2xl:my-[6.875em]">
      <div className="mb-[3.125em] flex flex-col gap-y-4 border-b border-b-light-90 pb-[1.875em] lg:grid lg:grid-cols-2 lg:gap-x-20 xl:mb-20 2xl:pb-[3.125em]">
        <h3 className="text-[1.75rem] font-semibold text-dark-15 lg:self-center lg:text-[2.375em] 2xl:text-5xl">
          Contact Us
        </h3>
        <p className="text-sm text-dark-35 lg:text-base 2xl:text-lg">
          Welcome to SkillBridge's Pricing Plan page, where we offer two
          comprehensive options to cater to your needs: Free and Pro. We believe
          in providing flexible and affordable pricing options for our services.
          Whether you're an individual looking to enhance your skills or a
          business seeking professional development solutions, we have a plan
          that suits you. Explore our pricing options below and choose the one
          that best fits your requirements.
        </p>
      </div>
      <div className="flex flex-col rounded-xl bg-white xl:flex-row">
        <div className="flex flex-col gap-y-[1.875em] border-b border-b-light-95 xl:grow xl:border-b-0 xl:border-r xl:border-r-light-95">
          <form className="flex flex-col gap-y-5 p-[1.875em] md:grid md:grid-cols-2 md:gap-4 xl:gap-10 xl:p-[3.75em] 2xl:gap-y-[3.125em] 2xl:p-20">
            <CustomInput
              onChange={onChange}
              type="text"
              placeholder="enter first name"
              label="first name"
              id="firstName"
              name="firstName"
              value={form.firstName}
              required
            />
            <CustomInput
              onChange={onChange}
              type="text"
              placeholder="enter last name"
              label="last name"
              id="lastName"
              name="lastName"
              value={form.lastName}
              required
            />
            <CustomInput
              onChange={onChange}
              type="email"
              placeholder="enter your email"
              label="email"
              id="email"
              name="email"
              value={form.email}
              required
            />
            <CustomInput
              onChange={onChange}
              type="tel"
              placeholder="enter phone number"
              label="phone"
              id="phoneNumber"
              name="phoneNumber"
              value={form.phoneNumber}
              required
            />
            <CustomInput
              onChange={onChange}
              type="text"
              placeholder="enter your subject"
              label="subject"
              id="subject"
              name="subject"
              value={form.subject}
              style="md:col-span-2"
              required
            />
            <CustomInput
              onChange={onChange}
              type="text"
              placeholder="enter your message here..."
              label="message"
              id="message"
              name="message"
              style="md:col-span-2"
              value={form.message}
              required
            />
            <div className="flex grow justify-center md:col-span-2">
              <button
                type="submit"
                className="grow rounded-md bg-primary-50 px-5 py-3.5 font-medium capitalize text-white sm:grow-0"
              >
                send your message
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col gap-y-5 p-[1.875em] md:grid md:grid-cols-2 md:gap-5 xl:flex xl:flex-col xl:gap-y-6 xl:p-[3.75em] 2xl:gap-y-[3.125em] 2xl:p-20">
          {ContactCards.map((item, index) => (
            <ContactCard key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
