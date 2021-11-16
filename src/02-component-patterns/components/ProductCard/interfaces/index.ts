export interface ProductCardProps {
	product: Product;
	children?: React.ReactElement | React.ReactElement[];
}

export interface Product {
	id: string;
	img?: string;
	title: string;
	description?: string;
}

export interface ProductContextProps {
	product: Product;
	counter: number;
	increaseBy: (value: number) => void;
	styles?: CSSModuleClasses;
}

export interface ProductCardComponent {
	({ children, product }: ProductCardProps): JSX.Element;
	Image: ({ img }: { img?: string }) => JSX.Element;
	Title: ({ title }: { title?: string }) => JSX.Element;
	Description: ({ description }: { description?: string }) => JSX.Element;
	Buttons: () => JSX.Element;
}
