import React from 'react';
import {useForm} from "react-hook-form";
import TextInput from "@/components/ui/TextInput.jsx";
import Button from "@/components/ui/Button.jsx";
import {Link, useNavigate} from "react-router-dom";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import axios from "@/config/axios/index.js";
import ReCAPTCHA from "react-google-recaptcha";

const schema = z.object({
    email: z.string().email('Invalid email address'),
    recaptcha: z.string().min(1, 'Please complete the reCAPTCHA'),
})

const ForgotPassword = () => {
    const navigate = useNavigate();
    const {register, handleSubmit, setValue, formState: {errors, isSubmitting}} = useForm({
        resolver: zodResolver(schema)
    });

    const onRecaptchaChange = (value) => {
        setValue('recaptcha', value || '');
    };


    const onSubmit = async (data) => {
        try {
            await axios.post('/auth/forgot', data);
            navigate('/login?message=If%20your%20email%20address%20exists%20in%20our%20database%2C%20you%20will%20receive%20an%20email%20with%20instructions%20for%20how%20to%20confirm%20your%20email%20address%20in%20a%20few%20minutes.');
        } catch (e) {
            console.error(e)
        }
    };
    return (
        <>
            <div className={'flex flex-col'}>
                <h1 className={'text-3xl lg:text-4xl font-bold'}>Lupa Password</h1>
                <p className={'text-xs lg:text-sm font-normal'}>Sudah punya akun? <Link to={'/login'}
                                                                                        className={'text-biru font-bold'}>Masuk</Link>
                </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className={'w-full space-y-2'}>
                <TextInput
                    name="email"
                    placeholder="Masukan email anda"
                    register={register}
                    type={'email'}
                    required
                />
                {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                )}
                <div className={'flex items-center w-full justify-center'}>
                    <input type="hidden" {...register('recaptcha')} />
                    <ReCAPTCHA sitekey={import.meta.env.VITE_REACT_APP_SITE_KEY} onChange={onRecaptchaChange}
                    />
                </div>
                {errors.recaptcha && (
                    <p className="text-red-500 text-xs mt-1">{errors.recaptcha.message}</p>
                )}

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
    );
};

export default ForgotPassword;
