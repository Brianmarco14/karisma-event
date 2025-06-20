import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {Link, useLocation, useNavigate} from 'react-router-dom';

import OtpInput from '@/components/OtpInput.jsx';
import Button from '@/components/ui/Button.jsx';
import axios from "@/config/axios/index.js";


const schema = z.object({
    otp: z.string().min(6, 'Otp harus terdiri dari 6 karakter').trim()
});

const VerifyLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);
    const email = searchParams.get('email');

    useEffect(() => {
        if (typeof email === 'undefined' || email === null || email === '') {
            navigate('/login');
        }
    }, [email, navigate]);

    const {
        control, // 'control' prop is passed to OtpInput to connect it with RHF
        handleSubmit, // Function to handle form submission, wrapping onSubmit
        formState: {errors, isSubmitting}, // 'errors' for displaying validation messages, 'isSubmitting' for loading state
        setError, // Function to manually set form errors (e.g., from API responses)
    } = useForm({
        resolver: zodResolver(schema), // Zod resolver for schema validation
        defaultValues: {
            otp: '', // Initialize the 'token' field in the form state
        },
    });


    // Function to handle form submission when validation passes
    const onSubmit = async (data) => {
        console.log('Verifying token:', data.otp); // Log the token being verified

        try {
            await axios.post('/auth/otp/verify', {
                ...data,
                email
            })
            navigate('/');
        } catch (error) {
            console.log(error)
            setError('otp', {
                type: 'server',
                message: error.response.data.error,
            });
        }
    };

    // Tailwind CSS classes for the submit button, dynamically changing based on 'isSubmitting' state
    const buttonClassName = `w-full flex items-center justify-center text-lg py-3
                             ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : ''}`;

    return (
        <>
            <div className={'flex flex-col'}>
                <h1 className={'text-3xl lg:text-4xl font-bold'}>Verifikasi Akun Anda</h1>
                <p className={'text-xs lg:text-sm font-normal'}>Kami telah mengirimkan 6 digit kode verifikasi ke email
                    Anda. Silakan masukkan kode di bawah ini.
                </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* OtpInput component to handle the 6-digit token input */}
                <OtpInput
                    name="otp" // The name of the field in your Zod schema and RHF form state
                    control={control} // Pass the 'control' object from useForm to OtpInput
                    length={6} // Specify that it's a 6-digit OTP
                    error={errors.otp} // Pass the error object for the 'token' field to OtpInput for styling
                />

                {/* Display validation or server-side error messages for the 'token' field */}
                {errors.otp && (
                    <p className="text-red-600 text-sm text-center mt-2">{errors.otp.message}</p>
                )}

                {/* Submit Button with loading spinner */}
                <Button color={'biru'} className={buttonClassName} disabled={isSubmitting}>
                    {isSubmitting ? (
                        <div className="flex items-center">
                            <div
                                className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                            Memverifikasi... {/* Text shown while submitting */}
                        </div>
                    ) : (
                        'Verifikasi'
                    )}
                </Button>
            </form>
            <div className="text-center text-sm text-gray-600">
                <p>Tidak menerima kode? <Link to="#" className="text-blue-600 hover:underline font-semibold">Kirim
                    ulang kode</Link></p>
            </div>
        </>
    );
};

export default VerifyLogin;
