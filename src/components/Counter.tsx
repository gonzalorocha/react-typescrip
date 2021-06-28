import { useState } from "react";
const Counter = () => {
	const [counter, setCounter] = useState(0);

	const increment = (number: number = 1): void => {
		setCounter(counter + number);
	};

	const decrement = (number: number = 1): void => {
		setCounter(counter - number);
	};

	return (
		<div className="mt-5">
			<h3> Countrer </h3>
			<h5> Valor {counter}</h5>
			<button
				className="btn btn-outline-primary mt-2 ml-10"
				onClick={() => increment()}
			>
				+ 1
			</button>
			<button
				className="btn btn-outline-primary mt-2 ml-10"
				onClick={() => increment(2)}
			>
				+ 2
			</button>
			<button
				className="btn btn-outline-danger mt-2 ml-10"
				onClick={() => decrement(1)}
			>
				- 1
			</button>
			<button
				className="btn btn-outline-danger mt-2 ml-10"
				onClick={() => decrement(2)}
			>
				- 2
			</button>
		</div>
	);
};

export default Counter;
