import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function BaseButton({ children, className = '', ...props }: Props) {
  return (
    <button
      className={`px-4 py-2 rounded border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
