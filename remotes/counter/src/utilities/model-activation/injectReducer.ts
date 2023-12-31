import {
  combineReducers,
  type Action,
  type Reducer,
  type Store,
  type UnknownAction,
} from "@reduxjs/toolkit";

export type EnhancedReduxStore<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  S = any,
  A extends Action<string> = UnknownAction,
  StateExt = unknown
> = Store<S, A, StateExt> & { asyncReducers: ReturnType<Reducer> };

export const injectReducer = <RootStore extends EnhancedReduxStore>(
  store: RootStore,
  reducer: Reducer
) => {
  const asyncReducers = store.asyncReducers ?? {};

  asyncReducers[reducer.name] = reducer;
  store.replaceReducer(combineReducers(asyncReducers));
};
