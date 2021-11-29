// INTERFACES
import { ProductCardComponent } from "./interfaces";
// COMPONENTS
import { ProductCard as _ProductCard } from "./ProductCard";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import { ProductDescription } from "./ProductDescription";
import { ProductButtons } from "./ProductButtons";

export { ProductImage, ProductTitle, ProductButtons, ProductDescription };

export const ProductCard: ProductCardComponent = Object.assign(_ProductCard, {
	Image: ProductImage,
	Title: ProductTitle,
	Description: ProductDescription,
	Buttons: ProductButtons,
});

export default ProductCard;
