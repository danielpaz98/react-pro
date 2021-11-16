import { useContext } from "react";
// CONTEXTS
import { ProductContext } from "./ProductCard";

export const ProductButtons = () => {
	const { counter, increaseBy, styles } = useContext(ProductContext);

	return (
		<div className={styles?.buttonsContainer}>
			<button className={styles?.buttonMinus} type="button" onClick={() => increaseBy(-1)}>
				-
			</button>

			<span className={styles?.countLabel}>{counter}</span>

			<button className={styles?.buttonAdd} type="button" onClick={() => increaseBy(+1)}>
				+
			</button>
		</div>
	);
};
