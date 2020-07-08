import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import style from './mainNews.css'

class RenderImage extends Component{
    render()
    {
        const items = this.props.items

        return items?(
            items.map((item,i)=>{
                return <Link to={`/articles/${item.id}`} key={i} >
                <div className={style.imageStyle}
                style={{
                    background:`url(/images/articles/${item.image})`
                }}>

                </div>
                </Link>
            })
        )
        :null
    }
}

export default RenderImage