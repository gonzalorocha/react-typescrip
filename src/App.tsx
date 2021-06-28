import Counter from "./components/Counter";
import User from "./components/User";
import TimerContainer from "./components/TimerContainer";
import CounterRed from "./components/CounterRed";
import Form from "./components/Form";

function App() {
	return (
		<>
			<h1>React + typescript</h1>
			<br />
			<hr />
			<h2>Custom hooks </h2>
			<Form />
			<div className="mb-20" />
			<hr />
			<div className="mt-10">
				<Counter />
				<User />
			</div>
			<br />
			<hr />
			<TimerContainer />

			<hr />
			<CounterRed />
		</>
	);
}

export default App;
