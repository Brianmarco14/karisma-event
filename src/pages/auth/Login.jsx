import TextInput from "../../components/ui/TextInput.jsx";
import PasswordInput from "../../components/ui/PasswordInput.jsx";
import Button from "../../components/ui/Button.jsx";
import {FcGoogle} from "react-icons/fc";
import {FaFacebook} from "react-icons/fa";
import React from "react";
import {useForm} from "react-hook-form";

const Login = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
            <div className={'flex flex-col'}>
                <h1 className={'text-4xl font-bold'}>Masuk</h1>
                <p className={'text-sm font-normal'}>Belum punya akun? <a href={'#'}
                                                                          className={'text-biru font-bold'}>Daftar
                    disini</a></p>
            </div>
            <form onSubmit={onSubmit} className={'w-full space-y-2'}>
                <TextInput
                    name="email"
                    placeholder="Email"
                    register={register}
                    type={'email'}
                    required
                />
                <PasswordInput
                    name="password"
                    placeholder={'Password'}
                    register={register}
                    required
                />
                <Button className={'w-full items-center justify-center'}>
                    Masuk
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
