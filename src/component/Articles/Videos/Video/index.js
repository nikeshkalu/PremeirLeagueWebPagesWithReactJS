import React,{Component} from 'react'
import axios from 'axios'
import {URL} from '../../../../config'

import style from '../../articles.css'
import TeamInfo from '../../Elements/teamInfo'
// import VideosTemplate from '../../../widgets/VideosList/VideosTemplate'
import VideoRelated from '../../../widgets/VideosList/VideoRelated'

class VideoArticles extends Component{
    state = {
        article : [],
        team: [],
        teams:[],
        related:[]

    }

    
    UNSAFE_componentWillMount(){
        axios.get(`${URL}/videos?id=${this.props.match.params.id}`)
        .then(response=>{
            let article = response.data[0]

            axios.get(`${URL}/teams?id=${article.team}`)
            .then(response=>{
                this.setState({
                    article,
                    team : response.data
                })
                this.getRelated()
            })
        
        })
        

    }

    getRelated = () =>{
        axios.get(`${URL}/teams`)
        .then(response=>{
            let teams = response.data
            // console.log(this.state.team)
            axios.get(`${URL}/videos?q=${this.state.team[0].city}&_limit=4`)
            .then(response=>{
                this.setState({
                    teams,
                    related : response.data
                })
            })

        })

    }

    render(){
       const article = this.state.article
        const team = this.state.team
        // console.log(article)
        // console.log(team[0])
        return team[0]?(
            <div>
                <TeamInfo team={team[0]}/>
                <div className={style.videoContent}>
                    <h1>
                        {article.title}
                    </h1>
                    <iframe src={`https://www.youtube.com/embed/${article.url}`}  title='Videos' width="100%" height="300px"></iframe>
                </div>
                <VideoRelated
                data={this.state.related}
                team={this.state.teams}/>

                {/* <VideosTemplate
                data={this.state.related}
                team={this.state.teams}/> */}
            </div>
        )
        :null
    }
}

export default VideoArticles
