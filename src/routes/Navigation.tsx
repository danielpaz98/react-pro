import { Suspense } from "react";
import { NavLink, Link, Route, Routes } from "react-router-dom";
import { routes } from "./routes";

export default function Navigation() {
	return (
		<div className="main-layout">
			<nav>
				<Link to="/">
					<img alt="React Logo" src="/favicon.svg" />
				</Link>
				<ul>
					{routes.map(({ path, name }) => (
						<li key={path}>
							<NavLink to={path}>{name}</NavLink>
						</li>
					))}
				</ul>
			</nav>

			<Routes>
				<Route element={<h1>Home</h1>} path="/" />
				{routes.map(({ path, component: Component }) => (
					<Route
						key={path}
						element={
							<Suspense fallback={<h1>Cargando...</h1>}>
								<Component />
							</Suspense>
						}
						path={path}
					/>
				))}
			</Routes>
		</div>
	);
}
