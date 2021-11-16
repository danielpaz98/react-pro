import { useContext } from "react";
// CONTEXTS
import { ProductContext } from "./ProductCard";
// IMAGES
import noImage from "~/02-component-patterns/assets/no-image.jpg";

export const ProductImage = ({ img }: { img?: string }) => {
	const { product, styles } = useContext(ProductContext);
	const imgToShow = img ?? product.img;
	const productImg = imgToShow ? { src: imgToShow, alt: product.title } : { src: noImage, alt: "No Image" };

	return productImg && <img alt={productImg.alt} className={styles?.productImg} src={productImg.src} />;
};
