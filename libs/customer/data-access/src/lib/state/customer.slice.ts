import { Customer, CustomersApi } from '@nx-web-mobile-api-demo/shared/api-client';
import { RootState } from '@nx-web-mobile-api-demo/shared/store';
import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';

export const CUSTOMER_FEATURE_KEY = 'customer';

/*
 * Update these interfaces according to your requirements.
 */

export interface CustomerState extends EntityState<Customer> {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error?: string | null;
}

export const customerAdapter = createEntityAdapter<Customer>();

const api = new CustomersApi(undefined, 'http://localhost:3333/api');

/**
 * Export an effect using createAsyncThunk from
 * the Redux Toolkit: https://redux-toolkit.js.org/api/createAsyncThunk
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(fetchCustomer())
 * }, [dispatch]);
 * ```
 */
export const fetchCustomers = createAsyncThunk(
  'customer/fetchStatus',
  async (_, thunkAPI) => {
    const res = await api.customerApiControllerSearch();
    return res.data;
  }
);

export const initialCustomerState: CustomerState =
  customerAdapter.getInitialState({
    loadingStatus: 'not loaded',
    error: null,
  });

export const customerSlice = createSlice({
  name: CUSTOMER_FEATURE_KEY,
  initialState: initialCustomerState,
  reducers: {
    add: customerAdapter.addOne,
    remove: customerAdapter.removeOne,
    // ...
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomers.pending, (state: CustomerState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetchCustomers.fulfilled,
        (state: CustomerState, action: PayloadAction<Customer[]>) => {
          customerAdapter.setAll(state, action.payload);
          state.loadingStatus = 'loaded';
        }
      )
      .addCase(fetchCustomers.rejected, (state: CustomerState, action) => {
        state.loadingStatus = 'error';
        state.error = action.error.message;
      });
  },
});

/*
 * Export reducer for store configuration.
 */
export const customerReducer = customerSlice.reducer;

/*
 * Export action creators to be dispatched. For use with the `useDispatch` hook.
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(customerActions.add({ id: 1 }))
 * }, [dispatch]);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */
export const customerActions = customerSlice.actions;

/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * import { useSelector } from 'react-redux';
 *
 * // ...
 *
 * const entities = useSelector(selectAllCustomer);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */
const { selectAll, selectEntities } = customerAdapter.getSelectors();

export const getCustomerState = (rootState: RootState): CustomerState =>
  rootState[CUSTOMER_FEATURE_KEY];

export const selectAllCustomers = createSelector(getCustomerState, selectAll);

export const selectCustomers = createSelector(
  getCustomerState,
  selectEntities
);
