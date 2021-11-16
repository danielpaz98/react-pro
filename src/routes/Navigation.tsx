import { NavLink, Link, Route, Routes } from "react-router-dom";
import ShoppingPage from "~/02-component-patterns/pages/ShoppingPage";

export default function Navigation() {
	return (
		<div className="main-layout">
			<nav>
				<Link to="/">
					<img alt="React Logo" src="/favicon.svg" />
				</Link>

				<ul>
					<li>
						<NavLink to="/shopping">Shopping</NavLink>
					</li>

					<li>
						<NavLink to="/about">About</NavLink>
					</li>

					<li>
						<NavLink to="/users">Users</NavLink>
					</li>
				</ul>
			</nav>

			<Routes>
				<Route element={<h1>Home</h1>} path="/" />
				<Route element={<ShoppingPage />} path="/shopping" />
				<Route element={<h1>About</h1>} path="/about" />
				<Route element={<h1>Users</h1>} path="/users" />
			</Routes>
		</div>
	);
}
