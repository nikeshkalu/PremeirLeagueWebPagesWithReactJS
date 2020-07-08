import React from 'react'
import {Link} from 'react-router-dom'
import style from './footer.css'
import {CURRENT_YEAR} from '../../config'

const footer = ()=>{
    return(
        <div className={style.footer}>
            <Link to="/" className={style.logo}>
            <img src="/images/premeirLeagueLogo.png" alt="premeir league logo"/>
            </Link>
            
            <div className={style.right}>
    @premeirLeague {CURRENT_YEAR} All Rights Reserved.
            </div>
        </div>
    )
}

export default footer