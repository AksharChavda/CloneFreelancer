import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'outline' | 'default';
}

export const Button: React.FC<ButtonProps> = ({ variant = 'default', ...props }) => {
    const baseStyle = 'py-2 px-4 font-semibold rounded-lg';
    const variantStyle = variant === 'outline' ? 'border-2 border-pink-600 text-pink-600' : 'bg-pink-600 text-white';

    return <button className={`${baseStyle} ${variantStyle}`} {...props} />;
};
