import React from 'react';
import {useForm} from "react-hook-form";
import TextInput from "@/components/ui/TextInput.jsx";
import Button from "@/components/ui/Button.jsx";
import {Link} from "react-router-dom";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import axios from "@/config/axios/index.js";

const schema = z.object({
    email: z.string().email('Invalid email address'),
})

const ForgotPassword = () => {
    const {register, handleSubmit} = useForm({
        resolver: zodResolver(schema)
    });

    const onSubmit = async (data) => {
        try {
            await axios.post('/auth/forgot', data);
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
                <Button className={'w-full items-center justify-center'}>
                    Reset Password
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