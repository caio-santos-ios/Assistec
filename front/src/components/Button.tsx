import React from "react"
import { useNavigate } from "react-router-dom"


type Tprops = {
    children: any;
    bg: string;
    navegate: string;
    type: "button" | "submit" | "reset" | undefined;
}

export const Button: React.FC<Tprops> = ({children, bg, navegate, type}) => {
    const navegation = useNavigate()

    return(
        <>
            {
                navegate == "" ?
                <button type={type} style={{background: bg}} className='h-12 text-white text-xl rounded p-2' >{children}</button>
                : 
                <button type={type} onClick={() => navegation(navegate)} style={{background: bg}} className='h-12 text-white text-xl rounded p-2' >{children}</button>
            }
        </>
    )
}