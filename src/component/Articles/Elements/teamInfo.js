import React from 'react'
import style from '../articles.css'

const TeamInfo = (props) =>{
    // console.log(props)
    return(
        <div className={style.articleTeamHeader}>
            <div className={style.left}
            style={{
                background: `url('/images/teams/${props.team.logo}')`
            }}>
                
            </div>
            <div className={style.right}>
                <div>
                     <span>{props.team.city} {props.team.name}</span>
                </div>
                <div>
        <strong>{props.team.stats[0].wins}-{props.team.stats[0].defeats}</strong>
                </div>
            </div>
        </div>
    )
}

export default TeamInfo