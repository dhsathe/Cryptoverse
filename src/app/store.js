import { configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from '../services/cryptoApi';
import { cryptosNewsApi } from '../services/cryptoNewsApi';

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptosNewsApi.reducerPath]: cryptosNewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cryptoApi.middleware).concat(cryptosNewsApi.middleware),
});
