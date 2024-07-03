import React from 'react';

interface ProgressProps {
    value: number;
    className?: string;
}

export const Progress: React.FC<ProgressProps> = ({ value, className }) => {
    return (
        <div className={`relative h-2 bg-gray-200 rounded ${className}`}>
            <div
                className="absolute top-0 left-0 h-full bg-pink-600 rounded"
                style={{ width: `${value}%` }}
            />
        </div>
    );
};
