import React from 'react';

const TextInput = React.forwardRef(({name, placeholder, register, className = '', onChange, value, ...rest}, ref) => {
    const inputProps = register ? {...register(name)} : {name, value, onChange};

    return (
        <input
            className={`w-full border-2 py-2 px-3 rounded-xl md:text-base text-sm outline-biru ${className}`}
            placeholder={placeholder}
            ref={ref}
            {...inputProps}
            {...rest}
        />
    );
});

export default TextInput;
