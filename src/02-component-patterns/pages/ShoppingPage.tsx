import ProductCard, { ProductButtons, ProductImage, ProductTitle, ProductDescription } from "../components/ProductCard";
import "../components/ProductCard/styles/custom-styles.css";

const product = {
	id: "61be8bee-87f1-4038-97cd-1a073d982439",
	img: "/coffee-mug.png",
	title: "Coffee Mug",
	description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, voluptas.",
};

export default function ShoppingPage() {
	return (
		<div>
			<h1>Shopping Page</h1>
			<hr />
			<div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
				<ProductCard className="bg-dark" product={product}>
					<ProductCard.Image className="custom-image" />
					<ProductCard.Title className="text-white text-shadow" />
					<ProductCard.Description className="custom-description" />
					<ProductCard.Buttons className="custom-buttons" />
				</ProductCard>

				<ProductCard className="bg-dark" product={product}>
					<ProductImage className="custom-image" />
					<ProductTitle className="text-white text-shadow" />
					<ProductDescription className="custom-description" />
					<ProductButtons className="custom-buttons" />
				</ProductCard>

				<ProductCard product={product} style={{ backgroundColor: "#c0c0c0" }}>
					<ProductImage />
					<ProductTitle style={{ fontWeight: "bold", textDecoration: "underline" }} />
					<ProductDescription />
					<ProductButtons />
				</ProductCard>
			</div>
		</div>
	);
}
