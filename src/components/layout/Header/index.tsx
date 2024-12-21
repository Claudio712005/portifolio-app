import { FC, useEffect, useState, useRef } from "react";
import { MdEmail, MdOutlineWbSunny, MdOutlineNightlight } from "react-icons/md";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useTheme } from "../../../contexts/theme";
import { motion, AnimatePresence } from "framer-motion";
import { Navigator } from "../Navigator";
import TranslateOptions from "../TranslateOptions";

export const Header: FC = () => {
	const { theme, toggleTheme } = useTheme();
	const [isThemeChanging, setIsThemeChanging] = useState(false);
	const headerContentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (isThemeChanging) {
			const timer = setTimeout(() => setIsThemeChanging(false), 500);
			return () => clearTimeout(timer);
		}
	}, [isThemeChanging]);

	const handleToggleTheme = () => {
		setIsThemeChanging(true);
		toggleTheme();
	};

	return (
		<header className="w-full flex items-center justify-center py-6 px-4 relative flex-col">
			<motion.div
				ref={headerContentRef}
				className="flex flex-wrap justify-between items-center gap-4 py-2 w-[82%] h-auto rounded-lg shadow-xl px-6 relative bg-gradient-to-r from-slate-100 to-indigo-200 dark:from-gray-500 dark:to-gray-700 transition-all"
			>
				<div className="flex items-center gap-6 flex-wrap w-full sm:w-auto justify-center">
					<a
						href="mailto:clausilvaaraujo11@gmail.com"
						className="text-slate-600 dark:text-gray-300 hover:text-indigo-800 dark:hover:text-gray-100 transition-all flex gap-2 items-center text-sm sm:text-base md:text-sm lg:text-sm"
						aria-label="Email"
					>
						<MdEmail className="text-sm transition-transform hover:scale-110" />
						<span className="font-semibold">clausilvaaraujo11@gmail.com</span>
					</a>

					<div className="w-0.5 h-[50%] dark:bg-white bg-slate-600 rounded-md"></div>

					<div className="flex gap-4 items-center justify-center">
						<a
							href="https://github.com"
							className="text-xl text-slate-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all transform hover:scale-110"
							aria-label="GitHub"
						>
							<FaGithub />
						</a>
						<a
							href="https://instagram.com"
							className="text-xl text-slate-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all transform hover:scale-110"
							aria-label="Instagram"
						>
							<FaInstagram />
						</a>
						<a
							href="https://linkedin.com"
							className="text-xl text-slate-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all transform hover:scale-110"
							aria-label="LinkedIn"
						>
							<FaLinkedin />
						</a>
					</div>
				</div>

				<div className="flex items-center gap-2 justify-center">
					<TranslateOptions />
					<AnimatePresence mode="wait">
						<motion.button
							key={theme}
							onClick={handleToggleTheme}
							className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500 dark:bg-gray-700 text-white hover:scale-110 transition-all shadow-lg hover:bg-indigo-600 dark:hover:bg-gray-600"
							aria-label="Toggle Theme"
							initial={{ scale: 0.8, rotate: 90 }}
							animate={{ scale: 1, rotate: 0 }}
							exit={{ scale: 0.8, rotate: -90 }}
							transition={{ duration: 0.5 }}
						>
							{theme === "light" ? (
								<MdOutlineNightlight className="text-lg" />
							) : (
								<MdOutlineWbSunny className="text-lg" />
							)}
						</motion.button>
					</AnimatePresence>
				</div>
			</motion.div>
			<Navigator />

		</header>
	);
};
