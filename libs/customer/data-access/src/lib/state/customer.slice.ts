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
import { CreateCustomerResponse } from 'libs/customer/api/src/lib/model/create-customer.response';

export const CUSTOMER_FEATURE_KEY = 'customer';

/*
 * Update these interfaces according to your requirements.
 */

export interface CustomerState extends EntityState<Customer> {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  creatingStatus: 'idle' | 'saving' | 'error';
  showCreateForm: boolean;
  error?: string | null;
}

export const customerAdapter = createEntityAdapter<Customer>();

const api = new CustomersApi(undefined, 'http://localhost:3333');

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

export const createCustomer = createAsyncThunk(
  'customer/createStatus',
  async (c: Customer, thunkAPI) => {
    const res = await api.customerApiControllerCreate(c);
    return {
      ...c,
      id: res.data.id
    }
  }
);

export const initialCustomerState: CustomerState =
  customerAdapter.getInitialState({
    loadingStatus: 'not loaded',
    creatingStatus: 'idle',
    showCreateForm: false,
    error: null,
  });

export const customerSlice = createSlice({
  name: CUSTOMER_FEATURE_KEY,
  initialState: initialCustomerState,
  reducers: {
    add: customerAdapter.addOne,
    remove: customerAdapter.removeOne,
    showCustomerForm: (state: CustomerState) => {
      state.showCreateForm = true
    },
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
      })

      // create

      .addCase(createCustomer.pending, (state: CustomerState) => {
        state.creatingStatus = 'saving';
      })
      .addCase(
        createCustomer.fulfilled,
        (state: CustomerState, action: PayloadAction<Customer>) => {
          customerAdapter.addOne(state, action.payload);
          state.creatingStatus = 'idle';
          state.showCreateForm = false;
        }
      )
      .addCase(createCustomer.rejected, (state: CustomerState, action) => {
        state.creatingStatus = 'error';
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

export const selectShowCustomerForm = createSelector(
  getCustomerState,
  (state: CustomerState) => state.showCreateForm
);

