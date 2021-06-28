import Counter from "./components/Counter";
import User from "./components/User";
import TimerContainer from "./components/TimerContainer";

function App() {
	return (
		<>
			<h1>React + typescript</h1>
			<br />
			<hr />
			<div className="mt-10">
				<Counter />
				<User />
			</div>
			<br />
			<hr />
			<TimerContainer />
		</>
	);
}

export default App;
