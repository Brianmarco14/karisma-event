import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"

const RedeemEvent = () => {
    return (
        <>
            <Navbar />
            <div className="bg-[#0d1b47] min-h-[100vh] flex justify-center items-center relative">
                <img src="/abstract-bg.webp" alt="" className="absolute top-0 left-0 h-full w-full" />
                <div className="bg-white p-5 lg:p-10 rounded-xl max-w-xs lg:max-w-xl 2xl:max-w-screen-sm w-full flex flex-col gap-5 lg:gap-8 items-center z-10">
                    <Link to={'/'} className="relative">
                        <img src="/logokarisma.webp" alt="logo" className="w-48 lg:w-40 object-cover" />
                    </Link>
                    <form className="flex flex-col items-center gap-5 lg:gap-6 w-full">
                        <p className="text-[#0d1b47] text-center text-sm lg:text-base font-medium">Silahkan Redeem Disini</p>
                        <div className="w-full lg:w-4/5">
                            <input type="text" className="border-2 px-3 py-2 w-full rounded-xl outline-none text-sm lg:text-base" placeholder="Masukkan Kode Redeem Disini..." />
                        </div>
                        <button className="bg-[#03387E] py-2 px-3 rounded-full text-white w-fit font-semibold">Redeem Code</button>
                    </form>
                    <p className="text-[#0d1b47] text-sm lg:text-base text-center pt-5 lg:pt-0">Mengalami kendala saat redeem kode? <Link to={'/'} className="text-blue-400">Hubungi Kami</Link></p>
                </div>
            </div>
        </>

    )
}

export default RedeemEvent