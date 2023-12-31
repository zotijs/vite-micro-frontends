import { type Reducer } from "@reduxjs/toolkit";
import { type ComponentType, useEffect } from "react";
import { injectReducer, type EnhancedReduxStore } from "./injectReducer";

type PropsWithStore<P> = P & { store?: EnhancedReduxStore };

export const withModelActivation =
  (reducer: Reducer) =>
  <P,>(Component: ComponentType<P>) =>
  (props: PropsWithStore<P>) => {
    const { store } = props;

    console.log(props);
    useEffect(() => {
      !!store && !!reducer && injectReducer(store, reducer);
    }, [store]);

    return <Component {...props} />;
  };
