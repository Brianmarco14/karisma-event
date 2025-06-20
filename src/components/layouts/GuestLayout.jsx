import React from 'react';
import {Outlet} from "react-router-dom";

const GuestLayout = () => {

    return (<div className="bg-biru-dark md:p-10 flex flex-col items-center justify-center relative min-h-screen">
        <img src={`/abstract-bg.webp`} className={'absolute top-0 left-0 h-full w-full object-cover z-0'}
             alt="ripple background"/>
        <div
            className={'absolute inset-0 flex justify-center items-center py-10'}>
            <div className={'w-4/5 rounded-xl grid grid-cols-2 overflow-hidden'}>
                <div className={'bg-biru flex justify-center items-center px-20 flex-col space-y-4'}>
                    <img src={`/logokav2.webp`} className={'object-contain'} alt="logo"/>
                    <p className={'text-xs text-white'}>© 2023 PT. Karisma Garuda Mulia. All Rights Reserved</p>
                </div>
                <div className={'bg-white flex flex-col justify-center py-20 px-20 space-y-4'}>
                    <Outlet/>
                </div>
            </div>
        </div>
    </div>);
};

export default GuestLayout;
