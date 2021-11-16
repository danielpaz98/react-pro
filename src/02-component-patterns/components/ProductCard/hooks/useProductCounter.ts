import { useState } from "react";

export function useProductCounter() {
	const [counter, setCounter] = useState(0);

	const increaseBy = (value: number) => setCounter((curr) => Math.max(curr + value, 0));

	return {
		counter,
		increaseBy,
	};
}
