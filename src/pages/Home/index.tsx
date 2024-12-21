import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from '../../components/common/Button';
import { FaDownload } from 'react-icons/fa';
import './style.css'
import ScrollTriggered from '../../components/specific/ScrollTriggered';
import BlurryCursor from '../../components/specific/BurryCursor';

const Home: FC = () => {
	const { t } = useTranslation();

	const [isCursorActive, setIsCursorActive] = useState<boolean>(false);

	const textVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
	};

	return (
		<div className="flex flex-col w-[80%] text-white">
			<div className="flex flex-row justify-between w-full">
				<div className="flex flex-col gap-6 mt-10 text-left">
					<motion.div
						variants={textVariants}
						initial="hidden"
						animate="visible"
						className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-2xl"
						onMouseOver={() => setIsCursorActive(true)} onMouseLeave={() => setIsCursorActive(false)}
					>
						<motion.h6
							variants={textVariants}
							initial="hidden"
							animate="visible"
							className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4"
							role="heading"
							aria-level={2}
						>
							{t('home.intro')}
						</motion.h6>

						<motion.h1
							variants={textVariants}
							initial="hidden"
							animate="visible"
							className="text-5xl font-bold text-yellow-500 dark:text-yellow-300 mb-4"
							role="heading"
							aria-level={1}
						>
							{t('home.profession')}
						</motion.h1>

						<motion.p
							variants={textVariants}
							initial="hidden"
							animate="visible"
							className="text-sm leading-relaxed mb-4 text-gray-700 dark:text-gray-100"
							aria-live="polite"
						>
							{t('home.description')}
						</motion.p>

						<motion.div
							variants={textVariants}
							initial="hidden"
							animate="visible"
							className="flex gap-3"
						>
							<Button
								onClick={() => console.log('Button clicked')}
								type="button"
								variant="filled"
								size="medium"
								className="w-fit flex items-center"
							>
								<FaDownload className="mr-2" />
								<span className="font-light text-[0.8rem]">
									{t('home.button-my-cv')}
								</span>
							</Button>
						</motion.div>
					</motion.div>

					<motion.div
						variants={textVariants}
						initial="hidden"
						animate="visible"
						className="mt-6 flex flex-col gap-6 sm:flex-row sm:gap-12 items-start sm:items-start"
					>
						<div className="flex gap-3 flex-col sm:w-[25%]">
							<span className="font-medium dark:text-gray-300 text-gray-800 text-lg">{t('home.info1Title')}</span>
							<span className="text-[0.7rem] text-gray-500 dark:text-gray-400">
								{t('home.info1Content')}
							</span>
						</div>

						<div className="flex gap-3 flex-col sm:w-[25%]">
							<span className="font-medium dark:text-gray-300 text-gray-800 text-lg">{t('home.info2Title')}</span>
							<span className="text-[0.7rem] text-gray-500 dark:text-gray-400">
								{t('home.info2Content')}
							</span>
						</div>
					</motion.div>
				</div>
				<motion.div className='flex flex-col gap-6 w-[70%]'
					initial={{ x: 100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 1 }}
				>
					<div
						className='w-full overflow-y-auto max-h-[80vh] p-4 hide-scrollbar'
					>
						<ScrollTriggered />
					</div>
				</motion.div>
				<BlurryCursor isActive={isCursorActive} />
			</div>
		</div>
	);
};

export default Home;
