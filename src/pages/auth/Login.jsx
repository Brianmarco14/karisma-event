import PasswordInput from "@/components/ui/PasswordInput.jsx";
import Button from "@/components/ui/Button.jsx";
import {FcGoogle} from "react-icons/fc";
import {FaFacebook} from "react-icons/fa";
import React, {useEffect, useRef} from "react";
import {useForm} from "react-hook-form";
import TextInput from "@/components/ui/TextInput.jsx";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Link, useLocation, useNavigate} from "react-router-dom";
import axios from "@/config/axios/index.js";
import {useMessage} from "@/context/MessageContext.jsx";

const schema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
});

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {addMessage} = useMessage();
    const addedRef = useRef(false);

    const searchParams = new URLSearchParams(location.search);
    const message = searchParams.get('message');

    useEffect(() => {
        if (message && !addedRef.current) {
            addMessage(message);
            addedRef.current = true;
        }
    }, [message]);

    const {register, handleSubmit, formState: {errors, isSubmitting}, setError} = useForm({
        resolver: zodResolver(schema)
    });

    const onSubmit = async (data) => {
        try {
            await axios.post('/auth/login', data);

            navigate(`/verify-login?email=${data.email}`);
        } catch (error) {
            if (error.response && error.response.status === 422) {
                setError('email', {
                    type: '401',
                    message: 'Invalid email or password. Please try again.'
                });
            } else {
                setError('email', {
                    type: 'server',
                    message: 'An unexpected error occurred. Please try again later.'
                });
            }
        }
    };

    return (
        <>
            <div className={'flex flex-col'}>
                <h1 className={'text-3xl lg:text-4xl font-bold'}>Masuk</h1>
                <p className={'text-xs lg:text-sm font-normal'}>Belum punya akun? <a href={'#'}
                                                                                     className={'text-biru font-bold'}>Daftar
                    disini</a></p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className={'w-full space-y-2'}>
                <TextInput
                    name="email"
                    placeholder="Email"
                    register={register}
                    type={'email'}
                />
                <div className="flex justify-between items-center mt-1">
                    <p className={'text-red-600 text-xs'}>{errors.email && errors.email.message}</p>
                    <Link to={'/forgot-password'}
                          className="text-blue-600 hover:text-blue-800 text-xs font-medium focus:outline-none"
                    >
                        Lupa Password?
                    </Link>
                </div>
                <PasswordInput
                    name="password"
                    placeholder={'Password'}
                    register={register}
                    required
                />
                {errors.password &&
                    <p className={'text-red-600 text-xs'}>{errors.password.message}</p>}
                <Button type={'submit'} className={`w-full items-center justify-center`} disabled={isSubmitting}>
                    {isSubmitting ? <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"
                             viewBox="0 0 24 24"></div>
                    </div> : 'Masuk'}
                </Button>
            </form>
            <div className="relative flex justify-center items-center my-6">
                <hr className="w-full border-gray-300"/>
                <h3 className="absolute bg-white px-4 text-gray-500 font-semibold text-sm">OR</h3>
            </div>
            <div className={'flex flex-col gap-3'}>
                <Button
                    // onClick={() => handleSocialLogin('Google')}
                    color="putih" // Using 'abu' or a custom color for social buttons
                    className={'w-full items-center justify-center'}
                >
                    <FcGoogle/>
                    Login with Google
                </Button>
                <Button
                    // onClick={() => handleSocialLogin('Facebook')}
                    color="biru" // You might want a specific 'facebook-blue' color for this
                    className={'w-full items-center justify-center'}
                >
                    <FaFacebook/>
                    Login with Facebook
                </Button>
            </div>
            <div className={'text-center text-xs'}>
                <h3>Ada kendala? Laporkan ke Whatsapp</h3>
                <p className={'text-biru'}>+62 811 3631 515 (Hanya menerima pesan)</p>
            </div>
        </>
    );
};

export default Login;
