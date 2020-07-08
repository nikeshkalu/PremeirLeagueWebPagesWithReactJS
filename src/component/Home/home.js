import React from 'react'
import NewsSlider from '../widgets/NewsSlider/slider'
import NewsList from '../widgets/NewsList/newsList'
import VideosList from '../widgets/VideosList/videosList'

const Home = () =>{
    return(
        <div>
            <NewsSlider type="featured" start="0" end="4" settings={{dots:true}}/>
            <br></br>

            <NewsList
            type="card"
            loadmore = {true}
            start = {3}
            end = {6}
            />

            <VideosList
                type="card"
                title = {true}
                loadmore={true}
                start={2}
                end={5}
            />

        </div>
    )
}

export default Home