import React, {useEffect, useRef, useState} from 'react';
import {useController} from 'react-hook-form'; // Import useController
import TextInput from '@/components/ui/TextInput.jsx';


const OtpInput = ({name, control, length = 6, error}) => {
    const {
        field: {onChange: rhfOnChange, onBlur, value: rhfValue},
        fieldState: {invalid, isDirty, isTouched, error: fieldError},
        formState: {errors}
    } = useController({
        name,
        control,
    });

    const [otpValues, setOtpValues] = useState(
        rhfValue ? rhfValue.split('').slice(0, length) : new Array(length).fill('')
    );
    const inputRefs = useRef([]);


    useEffect(() => {
        if (rhfValue && rhfValue.length === length && otpValues.join('') !== rhfValue) {
            setOtpValues(rhfValue.split(''));
            inputRefs.current[0]?.focus();
        } else if (!rhfValue && otpValues.join('') !== '') {
            setOtpValues(new Array(length).fill(''));
            inputRefs.current[0]?.focus();
        }
    }, [rhfValue, length]);


    const handleChange = (e, index) => {
        const {value} = e.target;
        const newValue = value.replace(/\D/g, '').slice(0, 1);

        setOtpValues(prevValues => {
            const newOtpValues = [...prevValues];
            newOtpValues[index] = newValue;
            rhfOnChange(newOtpValues.join(''));
            return newOtpValues;
        });

        if (newValue && index < length - 1) {
            inputRefs.current[index + 1]?.focus();
        } else if (newValue && index === length - 1) {
            inputRefs.current[index]?.blur();
            onBlur();
        }
    };

    // Handle backspace and arrow key navigation
    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !otpValues[index] && index > 0) {
            e.preventDefault(); // Prevent default backspace behavior (e.g., browser navigation)
            setOtpValues(prevValues => {
                const newOtpValues = [...prevValues];
                newOtpValues[index - 1] = ''; // Clear previous input
                rhfOnChange(newOtpValues.join('')); // Update RHF value
                return newOtpValues;
            });
            inputRefs.current[index - 1]?.focus(); // Move focus to previous
        } else if (e.key === 'ArrowLeft' && index > 0) {
            inputRefs.current[index - 1]?.focus();
        } else if (e.key === 'ArrowRight' && index < length - 1) {
            inputRefs.current[index + 1]?.focus();
        } else if (e.key === 'Delete' && otpValues[index] && index < length - 1) {
            e.preventDefault();
            setOtpValues(prevValues => {
                const newOtpValues = [...prevValues];
                newOtpValues[index] = ''; // Clear current input
                rhfOnChange(newOtpValues.join('')); // Update RHF value
                return newOtpValues;
            });
        }
    };

    // Handle paste event
    const handlePaste = (e) => {
        e.preventDefault();
        const pasteData = e.clipboardData.getData('text/plain').trim();
        const digits = pasteData.replace(/\D/g, '').slice(0, length); // Take up to 'length' digits

        if (digits.length > 0) {
            const newOtpValues = new Array(length).fill('');
            for (let i = 0; i < digits.length; i++) {
                newOtpValues[i] = digits[i];
            }
            setOtpValues(newOtpValues);
            rhfOnChange(newOtpValues.join('')); // Update RHF's value

            // Move focus to the last filled input or the last input
            const lastIndex = Math.min(digits.length - 1, length - 1);
            inputRefs.current[lastIndex]?.focus();
        }
    };

    const isError = error || fieldError; // Combine parent passed error with useController's error

    return (
        <div
            className={`grid gap-2 lg:gap-3`}
            style={{gridTemplateColumns: `repeat(${length}, minmax(0, 1fr))`}} // Dynamic grid columns using inline style
        >
            {Array.from({length: length}).map((_, index) => (
                <TextInput
                    key={index}
                    name={`${name}-${index}`} // Unique name for each physical input
                    type="text"
                    maxLength={1}
                    inputMode="numeric"
                    placeholder="" // No placeholder for individual digits
                    value={otpValues[index]}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    onPaste={index === 0 ? handlePaste : undefined} // Only allow paste on the first input
                    ref={(el) => (inputRefs.current[index] = el)}
                    // Apply custom styling for individual OTP boxes
                    className={`h-28 lg:h-20 text-center text-xl !px-0 border ${isError ? 'border-red-500' : 'border-gray-300'}`}
                />
            ))}
        </div>
    );
};

export default OtpInput;
