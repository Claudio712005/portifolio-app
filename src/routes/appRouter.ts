import { FaHome, FaUser } from "react-icons/fa";
import Home from "../pages/Home";
import { AppRoute } from "../interfaces/routes";
import { Sobre } from "../pages/Sobre";

export const appRoutes: AppRoute[] = [
	{
		path: '/',
		breadcrumb: {
			labelKey: 'breadcrumb.home',
			render: true,
			meta: {
				descriptionKey: 'meta.home.description',
				keywordsKey: ['meta.home.keywords'],
			},
		},
		component: Home,
		isVisible: false,
		icon: FaHome,
	},
	{
		path: '/sobre',
		breadcrumb: {
			labelKey: 'breadcrumb.about',
			render: true,
			meta: {
				descriptionKey: 'meta.about.description',
				keywordsKey: ['meta.sobre.keywords'],
			},
		},
		component: Sobre,
		isVisible: true,
		icon: FaUser,
	}
];
