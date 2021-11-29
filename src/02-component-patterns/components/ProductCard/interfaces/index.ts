import { Props as ProductCardProps } from "../ProductCard";
import { Props as ProductCardImageProps } from "../ProductImage";
import { Props as ProductCardTitleProps } from "../ProductTitle";
import { Props as ProductCardDescriptionProps } from "../ProductDescription";
import { Props as ProductCardButtonsProps } from "../ProductButtons";

export interface Product {
	id: string;
	img?: string;
	title: string;
	description?: string;
}

export interface ProductContextProps {
	product: Product;
	counter: number;
	increaseBy: (_value: number) => void;
	styles?: CSSModuleClasses;
}

export interface ProductCardComponent {
	(Props: ProductCardProps): JSX.Element;
	Image: (Props: ProductCardImageProps) => JSX.Element;
	Title: (Props: ProductCardTitleProps) => JSX.Element;
	Description: (Props: ProductCardDescriptionProps) => JSX.Element;
	Buttons: (Props: ProductCardButtonsProps) => JSX.Element;
}
