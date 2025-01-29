import { api } from '../../api/api.ts';

const contactApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createMessage: builder.mutation<void, IMessageMutation>({
      query: (body) => ({
        method: 'POST',
        body: body,
        url: '/messages',
      }),
    }),
  }),
});

export const { useCreateMessageMutation } = contactApi;
