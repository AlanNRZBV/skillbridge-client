import { api } from '../../api/api.ts';

const aboutApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAboutData: builder.query<IAboutResponse, void>({
      query: () => ({
        url: '/about',
        method: 'GET',
      }),
    }),
  }),
});
export const { useGetAboutDataQuery } = aboutApi;
