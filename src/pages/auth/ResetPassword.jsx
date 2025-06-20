import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import axios from "@/config/axios/index.js";
import Button from "@/components/ui/Button.jsx";
import {z} from "zod";
import PasswordInput from "@/components/ui/PasswordInput.jsx";
import {useLocation, useNavigate} from "react-router-dom";

const schema = z.object({
    password: z.string().min(8, 'Kata sandi harus terdiri dari setidaknya 8 karakter')
        .regex(/[A-Z]/, 'Kata sandi harus mengandung setidaknya satu huruf besar')
        .regex(/[a-z]/, 'Kata sandi harus mengandung setidaknya satu huruf kecil')
        .regex(/[0-9]/, 'Kata sandi harus mengandung setidaknya satu angka')
        .regex(/[^A-Za-z0-9]/, 'Kata sandi harus mengandung setidaknya satu karakter khusus'),
    confirm_password: z.string().min(8, 'Konfirmasi kata sandi harus terdiri dari setidaknya 8 karakter')
}).refine(data => data.password === data.confirm_password, {
    message: 'Kata sandi dan konfirmasi kata sandi harus cocok',
    path: ['confirm_password'], // Path of error
});


const ResetPassword = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get('token');

    useEffect(() => {
        if (typeof token === 'undefined' || token === null || token === '') {
            navigate('/login');
        }
    }, [token, navigate]);

    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm({
        resolver: zodResolver(schema)
    });

    const onSubmit = async (data) => {
        try {
            await axios.post('/auth/reset-password', {
                ...data,
                token
            });

            navigate('/login');
        } catch (e) {
            console.error(e)
        }
    };
    return (
        <>
            <div className={'flex flex-col'}>
                <h1 className={'text-3xl lg:text-4xl font-bold'}>Reset Password</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className={'w-full space-y-2'}>
                <PasswordInput
                    name="password"
                    placeholder="Masukan password baru anda"
                    register={register}
                    required
                />
                {errors.password &&
                    <p className={'text-red-600 text-xs'}>{errors.password.message}</p>}
                <PasswordInput
                    name="confirm_password"
                    placeholder="Konfirmasi password baru anda"
                    register={register}
                    required
                />
                {errors.confirm_password &&
                    <p className={'text-red-600 text-xs'}>{errors.confirm_password.message}</p>}
                <Button type={'submit'} className={`w-full items-center justify-center`} disabled={isSubmitting}>
                    {isSubmitting ? <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"
                             viewBox="0 0 24 24"></div>
                    </div> : 'Reset Password'}
                </Button>
            </form>
            <div className={'text-center text-xs'}>
                <h3>Ada kendala? Laporkan ke Whatsapp</h3>
                <p className={'text-biru'}>+62 811 3631 515 (Hanya menerima pesan)</p>
            </div>
        </>
    )
        ;
};

export default ResetPassword;