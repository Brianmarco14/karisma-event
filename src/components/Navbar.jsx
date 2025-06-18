import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="bg-white w-full flex justify-center shadow-sm fixed top-0 z-10">
        <nav className="max-w-[350px] lg:max-w-screen-lg 2xl:max-w-screen-2xl w-full flex justify-between items-center py-2">
            <Link to={'/'} className="relative w-20 xs:w-24 2xl:w-40">
                <img src="/logokarisma.webp" alt="logo" className="object-cover"/>
            </Link>
            <div>hi, Brian</div>
        </nav>
    </header>
  )
}

export default Navbar