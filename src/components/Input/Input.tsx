import React, { useState } from "react"

interface InputProps {
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({value, onChange}) =>{

    return(
        <input className="search__input" 
        type="text" 
        placeholder="Введите название организации"
        value={value}
        onChange={onChange}
        />
    )
}
export default React.memo(Input)