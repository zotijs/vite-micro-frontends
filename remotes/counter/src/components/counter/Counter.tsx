import { compose } from "@reduxjs/toolkit";
import { clsx } from "clsx";
import { type ComponentType } from "react";
import { connect } from "react-redux";
import counterReducer, {
  counterValue,
  increment,
  decrement,
  type CounterState,
} from "../../models/counter/slice";
import { withModelActivation } from "../../utilities/model-activation/withModelActivation";

import styles from "./Counter.module.css";

type Props = {
  counterValue: ReturnType<typeof counterValue>;
  incrementValue: typeof increment;
  decrementValue: typeof decrement;
  extraStyles?: string;
};

const BaseCounter = ({
  incrementValue,
  decrementValue,
  counterValue,
  extraStyles,
}: Props) => (
  <div className={clsx(styles.container, extraStyles)}>
    <button onClick={() => decrementValue()}>-</button>
    <strong>{counterValue}</strong>
    <button onClick={() => incrementValue()}>+</button>
  </div>
);

export const Counter = compose<ComponentType>(
  withModelActivation({ reducer: { name: "counter", value: counterReducer } }),
  connect(
    (state: unknown & { counter: CounterState }) => ({
      counterValue: counterValue(state),
    }),
    { incrementValue: increment, decrementValue: decrement }
  )
)(BaseCounter);
