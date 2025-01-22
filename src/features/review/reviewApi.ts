import { api } from '../../api/api.ts';

const reviewApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getReviews: builder.query<IReviewResponse, void>({
      query: () => ({
        url: '/reviews',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetReviewsQuery } = reviewApi;
