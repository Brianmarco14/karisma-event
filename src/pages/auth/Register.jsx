import React from 'react';
import {useForm} from "react-hook-form";
import TextInput from "@/components/ui/TextInput.jsx";
import PasswordInput from "@/components/ui/PasswordInput.jsx";
import Button from "@/components/ui/Button.jsx";
import {Link} from "react-router-dom";

const Register = () => {
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <>
            <div className={'flex flex-col'}>
                <h1 className={'text-3xl lg:text-4xl font-bold'}>Daftar Akun</h1>
                <p className={'text-xs lg:text-sm font-normal'}>Sudah punya akun? <Link to={'/login'}
                                                                                        className={'text-biru font-bold'}>Masuk</Link>
                </p>
            </div>
            <form onSubmit={onSubmit} className={'w-full space-y-2'}>
                <TextInput
                    name="name"
                    placeholder="Nama Lengkap"
                    register={register}
                    type={'text'}
                    required
                />
                <TextInput
                    name="email"
                    placeholder="Email"
                    register={register}
                    type={'email'}
                    required
                />
                <TextInput
                    name="phone"
                    placeholder="Nomor Telepon"
                    register={register}
                    type={'text'}
                    required
                />
                <PasswordInput
                    name="password"
                    placeholder={'Password'}
                    register={register}
                    required
                />
                <PasswordInput
                    name="confirm_password"
                    placeholder={'Confirm Password'}
                    register={register}
                    required
                />
                <div className="flex flex-wrap gap-3 justify-between">
                    <div className="flex items-start gap-2 text-sm">
                        <input type="checkbox" className="mt-1 cursor-pointer" id="snk" onChange={() => {
                        }}/>
                        <label htmlFor="snk" className="md:text-base text-xs">
                            Dengan menandai kotak di samping, Anda telah membaca dan menyetujui <a
                            href={"/tentang/syarat-dan-ketentuan"} className="text-blue-900 font-bold">
                            Syarat dan ketentuan</a> dan <a href={"/"} className="text-blue-900 font-bold"> Kebijakan
                            Privasi</a>
                        </label>
                    </div>
                </div>

                <Button className={'w-full items-center justify-center'}>
                    Daftar Sekarang
                </Button>
            </form>
            <div className={'text-center text-xs'}>
                <h3>Ada kendala? Laporkan ke Whatsapp</h3>
                <p className={'text-biru'}>+62 811 3631 515 (Hanya menerima pesan)</p>
            </div>
        </>
    );
};

export default Register;
