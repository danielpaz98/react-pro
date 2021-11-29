import { useContext } from "react";
// CONTEXTS
import { ProductContext } from "./ProductCard";

export interface Props {
	className?: string;
	title?: string;
	style?: React.CSSProperties;
}

export const ProductTitle = ({ title, className, style }: Props) => {
	const { product, styles } = useContext(ProductContext);

	return (
		<h3 className={`${styles?.productTitle} ${className}`} style={style}>
			{title ?? product.title}
		</h3>
	);
};
