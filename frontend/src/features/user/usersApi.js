import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }), 
  endpoints: (builder) => ({
    fetchUsers: builder.query({
      query: () => '/users',
    }),
    addUser: builder.mutation({
      query: (newUser) => ({
        url: '/users',
        method: 'POST',
        body: newUser,
      }),
    }),
  }),
});

export const { useFetchUsersQuery, useAddUserMutation } = usersApi;
