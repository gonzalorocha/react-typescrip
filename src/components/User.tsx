import { useState } from "react";

interface UserInterface {
	uid: string;
	name: string;
}

const initialUser: UserInterface = {
	uid: "1412341",
	name: "Gonzalo pre ",
};

const User = () => {
	const [user, setUser] = useState<UserInterface>(initialUser);

	const login = () => {
		setUser({
			uid: "ABC1254",
			name: "Gonzalo",
		});
	};

	return (
		<div>
			<h3>Usuario</h3>

			<button className="btn btn-outline-primary" onClick={login}>
				Login
			</button>
			<div className="mt-10">
				<pre>{user.name}</pre>
			</div>
		</div>
	);
};

export default User;
