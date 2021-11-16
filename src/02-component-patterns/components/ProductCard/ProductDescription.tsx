import { useContext } from "react";
// CONTEXTS
import { ProductContext } from "./ProductCard";

export const ProductDescription = ({ description }: { description?: string }) => {
	const { product, styles } = useContext(ProductContext);

	return <p className={styles?.productDescription}>{description ?? product.description}</p>;
};
