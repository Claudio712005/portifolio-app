import { motion } from "framer-motion";
import {
	FaJs,
	FaPython,
	FaJava,
	FaRust,
	FaReact,
	FaNodeJs,
	FaDatabase,
} from "react-icons/fa";
import { useState, useEffect } from "react";

export default function ScrollTriggered() {
	const [showScrollButton, setShowScrollButton] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			setShowScrollButton(window.scrollY === 0);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="min-h-screen text-gray-800 dark:text-gray-200 p-8">
			<h1 className="text-4xl font-bold text-center mb-4">Welcome to My Dev Portfolio</h1>
			<p className="text-center text-lg mb-12">
				Discover the tools and technologies that empower my journey as a developer.
			</p>
			<div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6">
				{techStack.map(([language, icon, hueA, hueB, details]) => (
					<Card
						language={language}
						icon={icon}
						hueA={hueA}
						hueB={hueB}
						details={details}
						key={language}
					/>
				))}
			</div>
			{showScrollButton && (
				<motion.button
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="fixed bottom-8 right-8 bg-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-500"
					onClick={() => {
						window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
					}}
				>
					Scroll to Explore
				</motion.button>
			)}
		</div>
	);
}

interface CardProps {
	language: string;
	icon: JSX.Element;
	hueA: number;
	hueB: number;
	details: { description: string; examples: string[] };
}

function Card({ language, icon, hueA, hueB, details }: CardProps) {
	const background = `linear-gradient(135deg, ${hue(hueA)}, ${hue(hueB)})`;

	return (
		<motion.div
			className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: false, amount: 0.5 }}
			exit="offscreen"
			whileHover={{ scale: 1.05, rotate: 1 }}
			transition={{ duration: 0.6 }}
			variants={cardVariants}
		>
			<div
				className="absolute inset-0"
				style={{ background }}
			></div>
			<div className="relative z-10 bg-opacity-80 bg-gray-800 p-6 rounded-lg backdrop-blur-sm text-white">
				<div className="text-5xl mb-4">{icon}</div>
				<h2 className="text-xl font-bold mb-2">{language}</h2>
				<p className="text-sm mb-4">{details.description}</p>
				<ul className="text-xs">
					{details.examples.map((example, index) => (
						<li key={index} className="list-disc ml-5">
							{example}
						</li>
					))}
				</ul>
			</div>
		</motion.div>
	);
}

const cardVariants = {
	offscreen: {
		opacity: 0,
		y: 100,
		rotate: 5,
	},
	onscreen: {
		opacity: 1,
		y: 0,
		rotate: 0,
		transition: { type: "spring", stiffness: 50, damping: 20 },
	},
	exit: {
		opacity: 0,
		y: -100,
		rotate: -5,
		transition: { duration: 0.5, ease: "easeInOut" },
	},
};

const hue = (h: number) => `hsl(${h}, 70%, 60%)`;

const techStack: [
	string,
	JSX.Element,
	number,
	number,
	{ description: string; examples: string[] }
][] = [
		[
			"JavaScript",
			<FaJs />,
			40,
			180,
			{
				description: "A powerful language for building web applications.",
				examples: ["ES6+ features", "Dynamic UI interactions", "RESTful APIs"],
			},
		],
		[
			"Python",
			<FaPython />,
			200,
			240,
			{
				description: "Known for simplicity and versatility.",
				examples: ["Data Analysis", "Machine Learning", "Web Scraping"],
			},
		],
		[
			"Java",
			<FaJava />,
			30,
			60,
			{
				description: "Robust and secure programming language.",
				examples: ["Spring Framework", "Android Development", "Enterprise Solutions"],
			},
		],
		[
			"Rust",
			<FaRust />,
			10,
			90,
			{
				description: "Memory-safe and fast systems programming.",
				examples: ["Concurrency", "WebAssembly", "CLI tools"],
			},
		],
		[
			"React",
			<FaReact />,
			180,
			30,
			{
				description: "A library for building user interfaces.",
				examples: ["Component-based Design", "State Management", "React Hooks"],
			},
		],
		[
			"Node.js",
			<FaNodeJs />,
			120,
			200,
			{
				description: "JavaScript runtime for building fast and scalable applications.",
				examples: ["Express.js", "Real-time Apps", "Microservices"],
			},
		],
		[
			"Databases",
			<FaDatabase />,
			300,
			160,
			{
				description: "Efficient data storage and retrieval.",
				examples: ["PostgreSQL", "MongoDB", "Redis"],
			},
		],
	];
