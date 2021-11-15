import { lazy } from "react";
import NoLazy from "~/01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
	name: string;
	path: string;
	children?: Route[];
	component: JSXComponent | React.LazyExoticComponent<JSXComponent>;
}

export const routes: Route[] = [
	{
		name: "LazyLoading Nested",
		path: "/lazyload",
		component: lazy(() => import("~/01-lazyload/layouts/LazyLayout")),
	},
	{
		name: "No LazyLoading",
		path: "/no-lazy",
		component: NoLazy,
	},
];
