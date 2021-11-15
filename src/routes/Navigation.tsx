import { NavLink, Link, Route, Routes } from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from "~/01-lazyload/pages";

export default function Navigation() {
	return (
		<div className="main-layout">
			<nav>
				<Link to="/">
					<img alt="React Logo" src="/favicon.svg" />
				</Link>

				<ul>
					<li>
						<NavLink to="/lazy1">Lazy1</NavLink>
					</li>

					<li>
						<NavLink to="/lazy2">Lazy2</NavLink>
					</li>

					<li>
						<NavLink to="/lazy3">Lazy3</NavLink>
					</li>
				</ul>
			</nav>

			<Routes>
				<Route element={<h1>Home</h1>} path="/" />
				<Route element={<LazyPage1 />} path="/lazy1" />
				<Route element={<LazyPage2 />} path="/lazy2" />
				<Route element={<LazyPage3 />} path="/lazy3" />
			</Routes>
		</div>
	);
}
