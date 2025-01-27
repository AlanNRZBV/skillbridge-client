import { api } from '../../api/api.ts';

const courseApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCourses: builder.query<ICoursesResponse, void>({
      query: () => ({ url: '/courses', method: 'GET' }),
    }),
    getCourseById: builder.query<ICourseResponse, string>({
      query: (id: string) => ({
        url: `/courses/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetCoursesQuery, useGetCourseByIdQuery } = courseApi;
