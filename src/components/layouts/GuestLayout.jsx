import React from 'react';
import {Link, Navigate, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

const GuestLayout = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    if (isAuthenticated) return <Navigate to={'/'}/>;

    return (<div className="bg-biru-dark flex flex-col items-center justify-center relative min-h-screen">
        <img src={`/abstract-bg.webp`} className={'absolute top-0 left-0 h-full w-full object-cover z-0'}
             alt="ripple background"/>
        <div
            className={'absolute inset-0 flex flex-col justify-center items-center px-4 lg:px-0 space-y-4'}>
            <Link to={'/'}>
                <div className={'flex items-center justify-center'}>
                    <img src={'/logokav2.webp'} alt={'Karisma Academy'}
                         className={'w-[40%] object-contain block lg:hidden'}/>
                </div>
            </Link>
            <div className={'w-full lg:w-4/5 rounded-xl grid grid-cols-2 overflow-hidden'}>
                <div className={'bg-biru hidden lg:flex justify-center items-center px-20 flex-col space-y-4 '}>
                    <img src={`/logokav2.webp`} className={'object-contain'} alt="logo"/>
                    <p className={'text-xs text-white'}>© 2023 PT. Karisma Garuda Mulia. All Rights Reserved</p>
                </div>
                <div
                    className={'bg-white flex flex-col justify-center py-10 lg:py-20 px-4 sm:px-10 md:px-15 lg:px-20 space-y-4 col-span-2 lg:col-span-1'}>
                    <Outlet/>
                </div>
            </div>
        </div>
    </div>);
};

export default GuestLayout;
