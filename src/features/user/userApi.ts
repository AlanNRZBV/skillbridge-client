import { api } from '../../api/api.ts';

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation<IUser, FormData>({
      query: (formData) => ({
        body: formData,
        url: '/users/register',
        method: 'POST',
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: '/users/login',
        method: 'POST',
        body: { ...credentials },
      }),
      onQueryStarted: async (_, { queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          console.log('=>(userApi.ts:22) ', data);
        } catch (e) {
          console.log('=>(userApi.ts:24) error', e);
        }
      },
    }),
    test: builder.query<any, void>({
      query: () => ({
        url: '/users/test',
        method: 'GET',
      }),
      onQueryStarted: async (_, { queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          console.log('=>(userApi.ts:36) data', data);
        } catch (e) {
          console.log('=>(userApi.ts:37) error', e);
        }
      },
    }),
  }),
  overrideExisting: true,
});

export const { useSignUpMutation, useLoginMutation, useTestQuery } = userApi;
