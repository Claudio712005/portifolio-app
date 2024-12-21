import { FC, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useLanguages } from "../../../i18n/translateOptions";

const TranslateOptions: FC = () => {
	const { i18n } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

	const languages = useLanguages();

	const toggleMenu = () => setIsOpen(!isOpen);

	const handleLanguageChange = (language: string) => {
		i18n.changeLanguage(language);
		setCurrentLanguage(language);
		setIsOpen(false);
	};

	return (
		<div className="relative">
			<motion.button
				className="flex items-center justify-center p-2 rounded-full bg-indigo-500 text-white hover:scale-110 transition-all"
				onClick={toggleMenu}
				aria-label="Toggle Language"
				whileTap={{ scale: 0.95 }}
			>
				<motion.span
					key={currentLanguage}
					className="text-sm font-semibold"
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.5 }}
					transition={{ duration: 0.3 }}
				>
					{currentLanguage.toUpperCase()}
				</motion.span>
			</motion.button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						className="absolute top-full mt-2 w-36 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2"
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.3 }}
					>
						<motion.div
							className="flex flex-col items-start gap-2"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.1 }}
						>
							{languages.map((language) => (
								<motion.button
									key={language.code}
									className={`flex items-center gap-2 w-full p-2 text-gray-700 dark:text-gray-300 hover:bg-indigo-200 dark:hover:bg-gray-600 rounded-md ${currentLanguage === language.code
											? "bg-indigo-500 text-white"
											: ""
										}`}
									onClick={() => handleLanguageChange(language.code)}
									whileHover={{ scale: 1.05 }}
									transition={{ duration: 0.3 }}
									aria-label={`Select ${language.name}`}
									aria-selected={currentLanguage === language.code ? "true" : "false"}
								>
									<language.icon className="text-lg" />
									<span>{language.name}</span>
								</motion.button>
							))}
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default TranslateOptions;
