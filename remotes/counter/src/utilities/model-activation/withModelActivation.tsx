import { type Reducer } from "@reduxjs/toolkit";
import {
  type ComponentType,
  type ContextType,
  useEffect,
  useContext,
} from "react";
import { ReactReduxContext } from "react-redux";
import { injectReducer, type EnhancedReduxStore } from "./injectReducer";

export type ModelActivationOptions = {
  reducer: { name: string; value: Reducer };
};

export const withModelActivation =
  (options: ModelActivationOptions) =>
  <P extends object>(Component: ComponentType<P>) =>
  (props: P) => {
    const { store } = useContext(ReactReduxContext) as ContextType<
      typeof ReactReduxContext
    > & { store: EnhancedReduxStore };

    const {
      reducer: { name, value },
    } = options;

    useEffect(() => {
      !!store && !!value && injectReducer(store, name, value);
    }, [store, name, value]);

    return <Component {...props} />;
  };
