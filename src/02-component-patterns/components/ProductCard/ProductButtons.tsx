import { useContext } from "react";
// CONTEXTS
import { ProductContext } from "./ProductCard";

export interface Props {
	className?: string;
	style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
	const { counter, increaseBy, styles } = useContext(ProductContext);

	return (
		<div className={`${styles?.buttonsContainer} ${className}`} style={style}>
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
