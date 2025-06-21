import { Link } from "react-router-dom"
import { FaRegCircleUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <header className="bg-white w-full flex justify-center shadow-sm fixed top-0 z-10">
        <nav className="max-w-[350px] lg:max-w-screen-lg 2xl:max-w-screen-2xl w-full flex justify-between items-center py-2">
            <Link to={'/'} className="relative w-20 xs:w-24 2xl:w-40">
                <img src="/logokarisma.webp" alt="logo" className="object-cover"/>
            </Link>
            <div className="flex items-center gap-8">
              <Link to={'/voucher-redeem'}>Redeem</Link>
              <Link to={'/profile'} className="flex items-center gap-3">
                <p>hi, Brian</p>
                <div><FaRegCircleUser className="text-3xl text-gray-800"/></div>
              </Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar