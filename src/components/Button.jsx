import { cn } from "../utils/cn"

const Button = ({ children, type, className, onClick, color = "biru" }) => {
    const colorVariants = {
        biru: 'bg-biru hover:bg-biru-dark text-white',
        hijau: 'bg-hijau hover:bg-hijau-dark',
        merah: 'bg-merah hover:bg-merah-dark',
        kuning: 'bg-kuning hover:bg-kuning-dark',
        abu: 'bg-abu hover:bg-abu-dark'
    };
    return (
        <button type={type} onClick={onClick} className={cn(colorVariants[color], ' px-3 lg:px-5 py-1 lg:py-2 text-sm lg:text-base rounded-xl font-semibold flex items-center gap-2 capitalize w-fit', className)}>
            {children}
        </button>
    )
}

export default Button