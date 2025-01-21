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
      invalidatesTags: ['User'],
    }),
    logOut: builder.mutation<void, void>({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
      }),
      invalidatesTags: ['User'],
    }),
    getCurrentUser: builder.query<ILoginResponse, void>({
      query: () => ({
        url: '/users/current',
        method: 'GET',
      }),
      providesTags: ['User'],
    }),
  }),
  overrideExisting: true,
});

export const {
  useSignUpMutation,
  useLoginMutation,
  useGetCurrentUserQuery,
  useLogOutMutation,
} = userApi;
