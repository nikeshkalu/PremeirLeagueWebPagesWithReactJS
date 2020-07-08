import React from 'react'
import {Link} from 'react-router-dom'
import FontAwesome from 'react-fontawesome'
import style from './sideNav.css'

const SideNavItems = ()=>{

    const items=[
        {
            type:style.options,
            icon:"home",
            text:"Home",
            Link: "/"
        },
        {
            type:style.options,
            icon:"file-text-o",
            text:"News",
            Link: "/news"
        }, 
        {
            type:style.options,
            icon:"play",
            text:"Videos",
            Link: "/videos"
        },
        {
            type:style.options,
            icon:"sign-in",
            text:"Sign In",
            Link: "/sign-in"
        },
        {
            type:style.options,
            icon:"sign-out",
            text:"Sign Out",
            Link: "/sign-out"
        }
    ]

    const showNavBarItems = () =>{
        return items.map((item,i)=>{
            return (
                <div key={i} className={item.type}>
                <Link to={item.Link}>
                    <FontAwesome name={item.icon}/>
                         {item.text}
                </Link>
            </div>
            )
        })
    }

    return(
       <div>
           {showNavBarItems()}
       </div>
    )
}

export default SideNavItems