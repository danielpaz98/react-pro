import { Link, Routes, Route } from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from "~/01-lazyload/pages";

export default function Navigation() {
	return (
		<>
			<h2>LazyLayout Pages</h2>
			<ul>
				<li>
					<Link to="lazy1">Lazy Page 1</Link>
				</li>

				<li>
					<Link to="lazy2">Lazy Page 2</Link>
				</li>

				<li>
					<Link to="lazy3">Lazy Page 3</Link>
				</li>
			</ul>

			<Routes>
				<Route element={<LazyPage1 />} path="lazy1" />
				<Route element={<LazyPage2 />} path="lazy2" />
				<Route element={<LazyPage3 />} path="lazy3" />
			</Routes>
		</>
	);
}
