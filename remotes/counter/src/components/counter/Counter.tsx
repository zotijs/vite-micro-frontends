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
  value: ReturnType<typeof counterValue>;
  incrementValue: typeof increment;
  decrementValue: typeof decrement;
  extraStyles?: string;
};

const Counter = ({
  incrementValue,
  decrementValue,
  value,
  extraStyles,
}: Props) => (
  <div className={clsx(styles.container, extraStyles)}>
    <button onClick={() => decrementValue()}>-</button>
    <input type="text" readOnly>
      {value}
    </input>
    <button onClick={() => incrementValue()}>+</button>
  </div>
);

const WrappedCounter = compose<ComponentType>(
  withModelActivation(counterReducer),
  connect(
    ({ counter }: unknown & { counter: CounterState }) => ({
      value: counter.value,
    }),
    { incrementValue: increment, decrementValue: decrement }
  )
)(Counter);

export default WrappedCounter;
