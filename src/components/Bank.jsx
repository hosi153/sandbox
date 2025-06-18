import { useReducer } from "react";

const initialState = { money: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { money: state.money + 1000 };
    case "decrement":
      return { money: state.money - 1000 };
    case "reset":
      return { money: 0 };
    default:
      return state;
  }
}

function Bank() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>잔고: {state.money}원</p>
      <button onClick={() => dispatch({ type: "increment" })}>+1</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
}

export default Bank;
