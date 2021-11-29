import { useContext } from "react";
// CONTEXTS
import { ProductContext } from "./ProductCard";
// IMAGES
import noImage from "~/02-component-patterns/assets/no-image.jpg";

export interface Props {
	className?: string;
	img?: string;
	style?: React.CSSProperties;
}

export const ProductImage = ({ img, className, style }: Props) => {
	const { product, styles } = useContext(ProductContext);
	const imgToShow = img ?? product.img;
	const productImg = imgToShow ? { src: imgToShow, alt: product.title } : { src: noImage, alt: "No Image" };

	return (
		productImg && (
			<img alt={productImg.alt} className={`${styles?.productImg} ${className}`} src={productImg.src} style={style} />
		)
	);
};
