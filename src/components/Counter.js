import { useSelector, useDispatch } from "react-redux";
//import our actions, created in counterSlice
import { increment, decrement } from "../features/counter/counterSlice";

const Counter = () => {
  //create count, set equal to useSelector method - takes in state and returns our count value from our counter's initial state (see counterSlice)
  const count = useSelector((state) => state.counter.count);
  //initialize dispatch
  const dispatch = useDispatch();

  return (
    <div>
      <section>
        <p>{count}</p>
        <div>
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
        </div>
      </section>
    </div>
  );
};

export default Counter;
