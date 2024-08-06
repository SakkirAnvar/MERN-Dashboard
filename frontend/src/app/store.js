import { configureStore } from '@reduxjs/toolkit';
import { usersApi } from '../features/user/usersApi';
import usersReducer from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});
