import React from "react"

interface ButtonProps {
    onClick?: (e: React.MouseEvent) => void;
    children: React.ReactNode;
    disabled: boolean
}

const Button: React.FC<ButtonProps> = ({onClick, children, disabled}) =>{

    return(
        <button disabled={disabled} type="submit" className="search__button" onClick={onClick}>{children}</button>
    )
}
export default Button