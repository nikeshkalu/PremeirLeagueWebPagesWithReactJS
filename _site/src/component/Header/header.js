import React from 'react'
import style from './header.css'
import './header.css'

import {Link} from 'react-router-dom'
import FontAwesome from 'react-fontawesome'
import SideNav from './SideNav/sideNav'

const Header = (props) =>{

    const navBars = ()=> {
        return (

            <div className={style.navBars}>
                <FontAwesome name="bars"
                onClick={props.onOpenNav}
                style={{
                    color: "#dfdfdf",
                    padding: "18px",
                    cursor: 'pointer',
                    marginRight:"-5px"
                }}/>
                
            </div>
        )
    }

    const logo = () => {
        return(
        <Link to="/" className={style.logo}>
            <img src="/images/premeirLeagueLogo.png" alt="premeir league logo"/>
        </Link>

        )
    }

    return(
    <header className={style.header}>
        <SideNav {...props}/>
        <div className={style.headerDiv}>

            {navBars()}  

            {logo()}
            
        </div>
    </header>  
    
       
    )
}

export default Header