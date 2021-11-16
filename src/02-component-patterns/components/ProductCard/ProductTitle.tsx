import { useContext } from "react";
// CONTEXTS
import { ProductContext } from "./ProductCard";

export const ProductTitle = ({ title }: { title?: string }) => {
	const { product, styles } = useContext(ProductContext);

	return <h3 className={styles?.productTitle}>{title ?? product.title}</h3>;
};
