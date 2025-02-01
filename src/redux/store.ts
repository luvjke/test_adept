import { configureStore } from '@reduxjs/toolkit';

import companySlice from './Slice/companySlice';

export const store = configureStore({
  reducer: {
    companys: companySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
