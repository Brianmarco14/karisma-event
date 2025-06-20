import React from 'react';

const TextInput = ({name, placeholder, register, className = '', ...rest}) => {
    return (
        <input
            className={`w-full border-2 py-2 px-3 rounded-xl md:text-base text-sm outline-biru ${className}`}
            placeholder={placeholder}
            {...register(name)}
            {...rest}
        />
    );
};

export default TextInput;
