import React from 'react'
import VideosTemplate from './VideosTemplate'

const VideoRelated = (props) =>{
    return(
        <div>
            <VideosTemplate
            data={props.data}
            team={props.team}/>
        </div>
    )
}

export default VideoRelated