import React from "react"

interface AvatarProps {
    src?: string,
    alt: string,
    letter: string,
}

const Avatar:React.FC<AvatarProps> = ({src, alt, letter}) =>{
    if (src !== '') {
        return (<img className="card__image" src={src} alt={alt} />)
    }else{
        return (<div className="card__letter">{letter}</div>)
    }
}
export default Avatar