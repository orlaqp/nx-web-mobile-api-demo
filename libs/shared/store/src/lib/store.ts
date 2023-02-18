/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';

import { customerReducer, CUSTOMER_FEATURE_KEY } from '@nx-web-mobile-api-demo/customer/data-access';
import { productReducer, PRODUCT_FEATURE_KEY } from '@nx-web-mobile-api-demo/product/data-access';
import { orderReducer, ORDER_FEATURE_KEY } from '@nx-web-mobile-api-demo/order/data-access';

export const store = configureStore({
  reducer: {
      [CUSTOMER_FEATURE_KEY]: customerReducer,
      [PRODUCT_FEATURE_KEY]: productReducer,
      [ORDER_FEATURE_KEY]: orderReducer,
      
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>() ;

export default store;