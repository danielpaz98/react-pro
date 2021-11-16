import ProductCard from "../components/ProductCard";

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
				<ProductCard product={product}>
					<ProductCard.Image />
					<ProductCard.Title />
					<ProductCard.Description />
					<ProductCard.Buttons />
				</ProductCard>
			</div>
		</div>
	);
}
