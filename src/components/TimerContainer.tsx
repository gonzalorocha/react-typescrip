import { useState } from "react";
import Timer from "./Timer";

const TimerContainer = () => {
	const [seconds, setSeconds] = useState(1000);

	return (
		<div>
			<button
				className="btn btn-outline-success"
				onClick={() => setSeconds(1000)}
			>
				1000
			</button>
			<button
				className="btn btn-outline-success"
				onClick={() => setSeconds(2000)}
			>
				2000
			</button>
			<button
				className="btn btn-outline-success"
				onClick={() => setSeconds(5000)}
			>
				5000
			</button>

			<Timer seconds={seconds} />
		</div>
	);
};

export default TimerContainer;
