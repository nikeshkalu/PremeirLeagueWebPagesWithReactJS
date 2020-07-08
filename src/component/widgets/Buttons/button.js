import React from 'react'
import {Link} from 'react-router-dom'
import style from './buttons.css'

const buttons = (props) =>{

    let template = null

    switch(props.type){
        case('Load More'):
            template = (
                <div className={style.BlueButton}
                onClick={props.loadMore}>
                    {props.cta}
                </div>
            )
            break

        case('linkTo'):
        template = (
            <Link to={props.Link}
            className={style.BlueButton}>
                {props.cta}
            </Link>
        )
            break

        default:
            template = null

    }

    return template
}

export default buttons

