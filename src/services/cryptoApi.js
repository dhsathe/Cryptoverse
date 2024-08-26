import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://coinranking1.p.rapidapi.com';

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set('x-rapidapi-key', 'bd6d5765ddmsh0bffd46fc9b1541p16eda2jsn068902497d96');
      headers.set('x-rapidapi-host', 'coinranking1.p.rapidapi.com');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => `/coins?limit=${count}`,
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;
