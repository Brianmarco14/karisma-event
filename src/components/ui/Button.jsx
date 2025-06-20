import {cn} from "@/utils/cn.js";

const Button = ({children, type, className, onClick, color = "biru", size = "md", disabled = false}) => {
    // Define color styles
    const colorVariants = {
        biru: 'bg-biru hover:bg-biru-dark text-white',
        hijau: 'bg-hijau hover:bg-hijau-dark text-white', // Added text-white for consistency
        merah: 'bg-merah hover:bg-merah-dark text-white', // Added text-white for consistency
        kuning: 'bg-kuning hover:bg-kuning-dark text-black', // Often better contrast with black text on yellow
        abu: 'bg-abu hover:bg-abu-dark text-white',
        putih: 'bg-white hover:bg-white-dark text-black border border-biru',
    };

    // Define size styles
    const sizeVariants = {
        sm: 'px-2 py-1 text-xs',      // Small button
        md: 'px-4 py-2 text-sm',      // Medium button (default)
        lg: 'px-6 py-3 text-base'     // Large button
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={cn(
                colorVariants[color],
                sizeVariants[size], // Apply the selected size styles
                'rounded-xl font-semibold flex items-center gap-2 capitalize w-fit', // Common styles
                className // Allow custom classes to override or extend
            )}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button;
