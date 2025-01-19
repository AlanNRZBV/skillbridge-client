import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env['VITE_API_URL'],
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    getPricingPlan: builder.query<IPricingPlanResponse, void>({
      query: () => ({ url: '/plans', method: 'GET' }),
    }),
  }),
});

export const { useGetPricingPlanQuery } = api;
