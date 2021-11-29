import { useContext } from "react";
// CONTEXTS
import { ProductContext } from "./ProductCard";

export interface Props {
	description?: string;
	className?: string;
	style?: React.CSSProperties;
}

export const ProductDescription = ({ description, className, style }: Props) => {
	const { product, styles } = useContext(ProductContext);

	return (
		<p className={`${styles?.productDescription} ${className}`} style={style}>
			{description ?? product.description}
		</p>
	);
};
