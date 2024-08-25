import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const cryptoApiHeaders = {
  "x-rapidapi-key": "bd6d5765ddmsh0bffd46fc9b1541p16eda2jsn068902497d96",
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest("/coins"),
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;
