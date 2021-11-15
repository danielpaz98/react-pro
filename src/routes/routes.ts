import { lazy } from "react";

type JSXComponent = () => JSX.Element;

interface Route {
	name: string;
	path: string;
	children?: Route[];
	component: JSXComponent | React.LazyExoticComponent<JSXComponent>;
}

export const routes: Route[] = [
	{
		name: "LazyPage1",
		path: "/lazy1",
		component: lazy(() => import("~/01-lazyload/pages/LazyPage1")),
	},
	{
		name: "LazyPage2",
		path: "/lazy2",
		component: lazy(() => import("~/01-lazyload/pages/LazyPage2")),
	},
	{
		name: "LazyPage3",
		path: "/lazy3",
		component: lazy(() => import("~/01-lazyload/pages/LazyPage3")),
	},
];
