import { useReducer } from "react";

const initialState = {
	counter: 0,
};

type ActionType =
	| { type: "increment" }
	| { type: "decrement" }
	| { type: "custom"; payload: number };

const counterReducer = (state: typeof initialState, action: ActionType) => {
	switch (action.type) {
		case "increment": {
			return {
				...state,
				counter: state.counter + 1,
			};
		}
		case "decrement": {
			return {
				...state,
				counter: state.counter - 1,
			};
		}
		case "custom": {
			return {
				...state,
				counter: state.counter + action.payload,
			};
		}
		default:
			return state;
	}
};

const CounterRed = () => {
	const [counter, dispatch] = useReducer(counterReducer, initialState);

	return (
		<>
			<h2>Counter red</h2>
			<p>
				Counter <span>{counter.counter}</span>
			</p>

			<button
				className="btn btn-outline-primary ml-10 mr-10"
				onClick={() => dispatch({ type: "increment" })}
			>
				+ 1
			</button>

			<button
				className="btn btn-outline-primary ml-10 mr-10"
				onClick={() => dispatch({ type: "custom", payload: +100 })}
			>
				+ 100
			</button>

			<button
				className="btn btn-outline-danger ml-10 mr-10"
				onClick={() => dispatch({ type: "decrement" })}
			>
				- 1
			</button>
		</>
	);
};

export default CounterRed;
