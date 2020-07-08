import React from 'react'
import {Link} from 'react-router-dom'
import Slick from 'react-slick'
import style from './slider.css'

const SliderTemplates = (props) =>{
    // console.log(props.data)
    let template = null
    const settings = {
        dots : true,
        infinite : true,
        arrows: false,
        speed: 500,
        slidesToShow : 1,
        slidesToScrool: 1,
        ...props.settings
    }

    switch(props.type){
        case('featured'):
            template = props.data.map((item,i)=>{
                return(
                    <div key={i} >
                        <div className={style.featuredItem}>
                            <div className={style.featuredImage}
                            style={{
                                background:`url(../images/articles/${item.image})`
                            }}>
                                <Link to = {`articles/${item.id}`}>
                                    <div className={style.featuredCaption}>   
                                        {item.title}
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            })
            break

        default:
            template = null    
    }

    return(
        <Slick {...settings}>
                {template}
        </Slick>
    )
}

export default SliderTemplates