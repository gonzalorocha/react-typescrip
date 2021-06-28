import { useState, useEffect, useRef } from "react";

type TimerArgs = {
	seconds: number;
	minutes?: number;
};

const Timer = ({ seconds, minutes }: TimerArgs) => {
	const [miliseconds, setMiliseconds] = useState(0);

	/*
    Se usa useRef para que siempre tome el mismo valor de memoria.
    y se define como <NodeJS.Timeout> para que solo le permita asignar a ref 
    la forma de NodeJS.Timeout
  **/
	const ref = useRef<NodeJS.Timeout>();

	useEffect(() => {
		ref.current && clearInterval(ref.current);

		ref.current = setInterval(
			() => setMiliseconds((milis) => milis + 1),
			seconds
		);

		return () => {};
	}, [seconds]);

	return (
		<>
			<h5>
				Timer: <small>{miliseconds}</small>
			</h5>
		</>
	);
};

export default Timer;
