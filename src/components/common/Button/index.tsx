import { FC } from 'react';
import { motion } from 'framer-motion';
import { ButtonProps } from '../../../interfaces/button';

export const Button: FC<ButtonProps> = ({
    children,
    onClick,
    disabled = false,
    type = 'button',
    className = '',
    size = 'medium',
    variant = 'filled',
    bordered = false,
    underlined = false,
}) => {
    const sizeClasses = {
        small: 'px-3 py-1 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-6 py-3 text-lg',
    };

    const variantClasses = {
        filled: 'bg-indigo-600 hover:bg-indigo-700 text-white',
        outlined: 'bg-transparent border-2 border-indigo-600 hover:bg-indigo-100 text-indigo-600',
        text: 'bg-transparent text-indigo-600 hover:bg-indigo-100',
    };

    const borderClass = bordered ? 'border-2 border-indigo-600' : '';
    const underlinedClass = underlined ? 'underline' : '';

    const hoverVariants = {
        rest: { scale: 1, opacity: 1, transition: { duration: 0.2 } },
        hover: { scale: 1.05, opacity: 0.9, transition: { duration: 0.3 } },
    };

    return (
        <motion.button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${sizeClasses[size]} ${variantClasses[variant]} ${borderClass} ${underlinedClass} rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 disabled:bg-gray-400 disabled:cursor-not-allowed ${className}`}
            variants={hoverVariants}
            initial="rest"
            whileHover="hover"
            whileFocus="focus"
            aria-disabled={disabled}
        >
            {children}
        </motion.button>
    );
};
