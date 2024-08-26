import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

export const cryptosNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set('x-rapidapi-key', 'bd6d5765ddmsh0bffd46fc9b1541p16eda2jsn068902497d96');
      headers.set('x-rapidapi-host', 'bing-news-search1.p.rapidapi.com');
      headers.set('X-BingApis-SDK', 'true');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCryptosNews: builder.query({
      query: ({ newsCategory, count }) => `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`,
    }),
  }),
});

export const { useGetCryptosNewsQuery } = cryptosNewsApi;
