export interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    size?: 'small' | 'medium' | 'large';  
    variant?: 'filled' | 'outlined' | 'text'; 
    bordered?: boolean;  
    underlined?: boolean;  
}
