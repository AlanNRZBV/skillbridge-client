import { api } from '../../api/api.ts';

const courseApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCourses: builder.query<ICoursesResponse, void>({
      query: () => ({ url: '/courses', method: 'GET' }),
    }),
  }),
});

export const { useGetCoursesQuery } = courseApi;
