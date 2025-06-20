import React, {useState} from 'react';
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa";

const PasswordInput = ({name, placeholder, register, className = '', ...rest}) => {
    const [show, setShow] = useState(false)
    return (
        <div
            className={`flex items-center gap-2 border-2  pe-3 rounded-xl focus-within:border-biru bg-putih w-full ${className}`}>
            <input
                type={show ? "text" : "password"}
                className="md:text-base text-sm  outline-none w-full py-2 px-3 rounded-s-xl"
                placeholder={placeholder}
                {...register(name)}
                {...rest}
            />
            {show ? (
                <button onClick={() => setShow(!show)} type="button">
                    <FaRegEyeSlash className="text-xl text-gray-500"/>
                </button>
            ) : (
                <button onClick={() => setShow(!show)} type="button">
                    <FaRegEye className="text-xl text-gray-500"/>
                </button>
            )}
        </div>
    );
};

export default PasswordInput;
