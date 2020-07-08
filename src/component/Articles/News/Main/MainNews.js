import React from 'react'
import NewsSlider from '../../../widgets/NewsSlider/slider'
import MainNewsList from './MainNewsList'

const MainNews = () =>{
    return(
        <div>
            <NewsSlider type="featured" start="0" end="4" settings={{dots:true}}/><br/>

            <MainNewsList
            type="card"
            loadmore = {true}
            start = {3}
            end = {6}/>
        </div>
    )
}

export default MainNews