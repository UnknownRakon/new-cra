import Avatar from "@components/Avatar"
import StarIcon from "@components/StarIcon"
import React from "react"
import { RepoItem } from "src/store/GitHubStore/types"

interface RepoTileProps {
    onClick?: (e: React.MouseEvent) => void;
    item: RepoItem
}

const RepoTile: React.FC<RepoTileProps> = ({item, onClick}) =>{

    const owner:string = item.owner.login
    const avatar:string = item.owner.avatar_url
    const url:string = item.owner.html_url
    const name:string = item.name
    const date: Date = new Date(item.updated_at)
    const month = date.toLocaleString('en-us', { month: 'short' })
    const day = date.getDay()
    const star:number = item.stargazers_count

    return(
        <div className="card" onClick={onClick}>
                <Avatar src={avatar} alt={owner} letter={owner[0]}/>
                <div className="card__content">
                    <strong className="card__title">{name}</strong>
                    <a className="card__link" href={url}>{owner}</a>
                    <div className="card__info">                            
                            <span>
                                <StarIcon/>{star}
                            </span>
                            <span className="card__date">Updated {day + ' ' + month}</span>
                    </div>
                </div>
            </div>
    )
}
export default RepoTile