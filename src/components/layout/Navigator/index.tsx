import React, { FC } from "react";
import { appRoutes } from "../../../routes/appRouter";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

export const Navigator: FC = () => {
	const { t } = useTranslation();
	const location = useLocation();
	const navigate = useNavigate();

	const handleNavigation = (path: string) => {
		navigate(path);
	};

	return (
		<motion.div
			className="flex flex-wrap gap-4 w-[85%] justify-start px-6 py-2"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.4 }}
		>
			{appRoutes
				.map((route) => {
					const isActive = location.pathname === route.path;

					return (
						<motion.div
							key={route.path}
							className={`flex items-center gap-1 p-1 justify-center relative group cursor-pointer ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300'}`}
							whileHover={{ scale: 1.05 }}
							transition={{ duration: 0.3 }}
							onClick={() => handleNavigation(route.path)}
						>
							{route.icon && (
								<div className={`text-xl ${isActive ? 'text-indigo-600' : 'text-gray-600'} dark:${isActive ? 'text-indigo-400' : 'text-gray-300'} group-hover:text-indigo-600 dark:group-hover:text-indigo-400`}>
									{React.createElement(route.icon)}
								</div>
							)}
							<span
								className={`text-sm transition-all w-full text-center ${isActive ? "text-indigo-600 dark:text-indigo-400" : "text-gray-700 dark:text-gray-300"} group-hover:text-indigo-600 dark:group-hover:text-indigo-400`}
							>
								{t(route.breadcrumb.labelKey)}
							</span>
							<div
								className={`absolute bottom-0 w-full h-[1px] bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isActive ? "opacity-100" : ""}`}
							></div>
						</motion.div>
					);
				})}
		</motion.div>
	);
};
