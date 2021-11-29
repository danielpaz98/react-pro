import { createContext } from "react";
// STYLES
import styles from "./styles/styles.module.css";
// INTERFACES
import { ProductContextProps, Product } from "./interfaces";
// CUSTOM HOOKS
import { useProductCounter } from "./hooks";

export const ProductContext = createContext({} as ProductContextProps);

export interface Props {
	product: Product;
	children?: React.ReactElement | React.ReactElement[];
	className?: string;
	style?: React.CSSProperties;
}

export function ProductCard({ children, product, className, style }: Props) {
	const { counter, increaseBy } = useProductCounter();

	return (
		<ProductContext.Provider value={{ product, counter, increaseBy, styles }}>
			<div className={`${styles.productCard} ${className}`} style={style}>
				{children}
			</div>
		</ProductContext.Provider>
	);
}

export default ProductCard;
