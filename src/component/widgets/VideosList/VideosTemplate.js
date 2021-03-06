import React from 'react'
import style from './videosList.css'
import {Link} from 'react-router-dom'
import CardInfo from '../CardInfo/cardInfo'

const videosTemplate = (props) =>{
    return(
        props.data.map((item,i)=>{
                return <Link to={`/videos/${item.id}`} key={i} >
                <div className={style.videoListItem}>
                    <div className={style.left}
                        style={{
                            background:`url(/images/videos/${item.image})`
                        }}>
                            <div>

                            </div>
                    </div>
                    <div className={style.right}>
                        <CardInfo teams={props.team} team={item.team} date={item.date}/>
                        <h2>
                            {item.title}
                        </h2>

                    </div>
                </div>
            </Link>
        })
        
       
    )
}

export default videosTemplate