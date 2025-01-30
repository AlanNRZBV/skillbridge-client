import CustomInput from '../components/UI/CustomInput.tsx';
import React, { useState } from 'react';
import { ContactCards, Headings } from '../constants';
import ContactCard from '../components/Cards/ContactCard.tsx';
import { useCreateMessageMutation } from '../features/contact/contactApi.ts';
import PageHeading from '../components/PageHeading.tsx';

interface IMessageState {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
}

const initialState: IMessageState = {
  email: '',
  firstName: '',
  lastName: '',
  message: '',
  phoneNumber: '',
  subject: '',
};

const Contacts = () => {
  const [form, setForm] = useState<IMessageState>(initialState);

  const [createMessage] = useCreateMessageMutation();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    const userData: IUserData = {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      phoneNumber: form.phoneNumber,
    };

    const message: IMessageMutation = {
      subject: form.subject,
      message: form.message,
      userData: userData,
    };

    createMessage(message);

    // setForm(initialState);
  };

  return (
    <div className="container mx-auto my-[3.125em] xl:my-20 2xl:my-[6.875em]">
      <PageHeading
        title={Headings.contacts.title}
        description={Headings.contacts.description}
      />
      <div className="flex flex-col rounded-xl bg-white xl:flex-row">
        <div className="flex flex-col gap-y-[1.875em] border-b border-b-light-95 xl:grow xl:border-b-0 xl:border-r xl:border-r-light-95">
          <form
            onSubmit={submitHandler}
            className="flex flex-col gap-y-5 p-[1.875em] md:grid md:grid-cols-2 md:gap-4 xl:gap-10 xl:p-[3.75em] 2xl:gap-y-[3.125em] 2xl:p-20"
          >
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
