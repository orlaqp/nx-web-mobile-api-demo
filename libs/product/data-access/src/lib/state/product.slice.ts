import { Product, ProductsApi } from '@nx-web-mobile-api-demo/shared/api-client';
import { RootState } from '@nx-web-mobile-api-demo/shared/store';
import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';

export const PRODUCT_FEATURE_KEY = 'product';

/*
 * Update these interfaces according to your requirements.
 */

export interface ProductState extends EntityState<Product> {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error?: string | null;
}

export const productAdapter = createEntityAdapter<Product>();

const api = new ProductsApi(undefined, 'http://localhost:3333/api');

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
 *   dispatch(fetchProduct())
 * }, [dispatch]);
 * ```
 */
export const fetchProducts = createAsyncThunk(
  'product/fetchStatus',
  async (_, thunkAPI) => {
    const res = await api.productApiControllerSearch();
    return res.data;
  }
);

export const initialProductState: ProductState = productAdapter.getInitialState(
  {
    loadingStatus: 'not loaded',
    error: null,
  }
);

export const productSlice = createSlice({
  name: PRODUCT_FEATURE_KEY,
  initialState: initialProductState,
  reducers: {
    add: productAdapter.addOne,
    remove: productAdapter.removeOne,
    // ...
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state: ProductState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetchProducts.fulfilled,
        (state: ProductState, action: PayloadAction<Product[]>) => {
          productAdapter.setAll(state, action.payload);
          state.loadingStatus = 'loaded';
        }
      )
      .addCase(fetchProducts.rejected, (state: ProductState, action) => {
        state.loadingStatus = 'error';
        state.error = action.error.message;
      });
  },
});

/*
 * Export reducer for store configuration.
 */
export const productReducer = productSlice.reducer;

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
 *   dispatch(productActions.add({ id: 1 }))
 * }, [dispatch]);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */
export const productActions = productSlice.actions;

/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * import { useSelector } from 'react-redux';
 *
 * // ...
 *
 * const entities = useSelector(selectAllProduct);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */
const { selectAll, selectEntities } = productAdapter.getSelectors();

export const getProductState = (rootState: RootState): ProductState =>
  rootState[PRODUCT_FEATURE_KEY];

export const selectAllProducts = createSelector(getProductState, selectAll);

export const selectProductEntities = createSelector(
  getProductState,
  selectEntities
);
