import useForm from "../hooks/useForm";

interface FormData {
	email: string;
	name: string;
	age: number;
}

const Form = () => {
	const { form, handleChange } = useForm<FormData>({
		email: "",
		name: "",
		age: 30,
	});
	return (
		<form>
			<div className="mb-3">
				<label className="form-label"> Email: </label>
				<input
					type="email"
					className="form-control"
					name="email"
					onChange={handleChange}
					value={form.email}
				/>
			</div>
			<div className="mb-3">
				<label className="form-label"> Name: </label>
				<input
					type="name"
					className="form-control"
					name="name"
					onChange={handleChange}
					value={form.name}
				/>
			</div>
			<div className="mb-3">
				<label className="form-label"> Age: </label>
				<input
					type="number"
					className="form-control"
					name="age"
					onChange={handleChange}
					value={form.age}
				/>
			</div>
			<pre>{JSON.stringify(form)}</pre>
		</form>
	);
};

export default Form;
