import { useState, ChangeEvent } from "react";

const useForm = <T extends Object>(initState: T) => {
	const [form, setForm] = useState(initState);

	const handleChange = ({
		target: { name, value },
	}: ChangeEvent<HTMLInputElement>) => {
		setForm({
			...form,
			[name]: value,
		});
	};
	return {
		form,
		handleChange,
	};
};

export default useForm;
