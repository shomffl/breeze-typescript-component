import React, { useEffect, useRef } from 'react';

interface InputProps {
    type: string;
    name: string;
    value: string | number;
    max?: number;
    className?: string;
    autoComplete?: string;
    required?: boolean;
    isFocused?: boolean;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Input({
    type = 'text',
    name,
    value,
    max,
    className,
    autoComplete,
    required,
    isFocused,
    handleChange,
}: InputProps) {
    const input = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isFocused) {
            input.current?.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                value={value}
                max={max}
                className={
                    `border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm ` +
                    className
                }
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
            />
        </div>
    );
}
