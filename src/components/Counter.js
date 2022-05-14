import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
//import our actions, created in counterSlice. useDispatch will be used to dispatch these actions
import {
  increment,
  decrement,
  decreaseFive,
  reset,
  incrementByAmount,
} from "../features/counter/counterSlice";

const Counter = () => {
  //create count, set equal to useSelector method - takes in state and returns our count value from our counter's initial state (see counterSlice)
  const count = useSelector((state) => state.counter.count);
  //initialize dispatch
  const dispatch = useDispatch();

  //state for user input
  const [incrementAmount, setIncrementAmount] = useState(0);
  //make sure it's a number and
  const addValue = Number(incrementAmount) || 0;
  //function that resets local state and dispatches reset action to redux
  const resetAll = () => {
    dispatch(reset());
    setIncrementAmount(0);
  };
  return (
    <div>
      <section>
        <p>{count}</p>
        <div>
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
          <button onClick={() => dispatch(decreaseFive())}>-5</button>
          <button onClick={() => resetAll()}>reset</button>
        </div>
        <input
          type="number"
          min="1"
          max="500"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <div>
          <button onClick={() => dispatch(incrementByAmount(addValue))}>
            Add amount
          </button>
        </div>
      </section>
    </div>
  );
};

export default Counter;
