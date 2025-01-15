import { api } from '../api/api.ts';

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation<IUser, FormData>({
      query: (formData) => ({
        body: formData,
        url: '/users/register',
        method: 'POST',
      }),
    }),
  }),
});

export const { useSignUpMutation } = userApi;
