import { NavLink, Link, Route, Routes } from "react-router-dom";

export default function Navigation() {
	return (
		<div className="main-layout">
			<nav>
				<Link to="/">
					<img alt="React Logo" src="/favicon.svg" />
				</Link>

				<ul>
					<li>
						<NavLink to="/">Home</NavLink>
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
				<Route element={<h1>About</h1>} path="/about" />
				<Route element={<h1>Users</h1>} path="/users" />
			</Routes>
		</div>
	);
}
