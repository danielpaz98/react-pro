import { createContext } from "react";
// STYLES
import styles from "./styles/styles.module.css";
// INTERFACES
import { ProductContextProps, ProductCardProps } from "./interfaces";
// CUSTOM HOOKS
import { useProductCounter } from "./hooks";

export const ProductContext = createContext({} as ProductContextProps);

export function ProductCard({ children, product }: ProductCardProps) {
	const { counter, increaseBy } = useProductCounter();

	return (
		<ProductContext.Provider value={{ product, counter, increaseBy, styles }}>
			<div className={styles.productCard}>{children}</div>
		</ProductContext.Provider>
	);
}

export default ProductCard;
