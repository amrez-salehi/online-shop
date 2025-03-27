import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";


type ButtonProps = ComponentProps<'button'> & {
    children: React.ReactNode;
}


    const Button = ({ children, className, ...rest }: ButtonProps) => {
    return (
        <button className={twMerge(`bg-blue-500 text-white p-2 rounded-md ${className}`)}   {...rest} >
            {children}
        </button>
    )
}   

export default Button;
