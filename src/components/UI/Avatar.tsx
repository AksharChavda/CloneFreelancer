import React from 'react';

export const Avatar: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    return <div className="relative inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-200">{children}</div>;
};

export const AvatarImage: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => {
    return <img className="h-full w-full rounded-full object-cover" {...props} />;
};

export const AvatarFallback: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    return <span className="text-gray-500">{children}</span>;
};
