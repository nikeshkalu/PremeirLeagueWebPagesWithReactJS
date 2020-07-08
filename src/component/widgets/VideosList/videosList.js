import React,{Component} from 'react'
import style from './videosList.css'
import axios from 'axios'
import {URL} from '../../../config'
import Button from '../Buttons/button'
import VideosTemplate from './VideosTemplate'

class videosList extends Component{

    state={
        teams : [],
        videos:[],
        start : this.props.start,
        end : this.props.end,
    }

    renderTitle = () =>{
        return this.props.title?
        <h3><strong>Premeir League</strong> Videos</h3>
        :null
    }

    UNSAFE_componentWillMount(){
        this.request(this.state.start,this.state.end)
    }

    request = (start,end)=>{
        if(this.state.teams.length<1){
            axios.get(`${URL}/teams`)
            .then(response=>{
                this.setState({
                    teams: response.data
                })
            })
        }

        axios.get(`${URL}/videos?_start=${start}&_end=${end}`)
        .then(response=>{
            this.setState({
                videos : [...this.state.videos,...response.data],
                start,
                end
            })
        })
    }

    renderVideos = () =>{
        let template = null
        switch(this.props.type){
            case('card'):
                template = (
                    <VideosTemplate
                    data = {this.state.videos}
                    team = {this.state.teams}
                    />
                )
                break
            
            default:
                template = null    
        }

        return template
    }

    loadMore = () =>{
        let end = this.state.end + (this.state.end-this.state.start)
        this.request(this.state.end,end)
    }

    renderButton = () =>{
        return this.props.loadmore
        ? <Button 
            type="Load More"
            cta="Load More Videos"  
            loadMore = {()=>this.loadMore()}/>
        : <Button 
            type="linkTo"
            cta="More Videos" 
            Link="/videos/"/>
    }

    render(){
        return(

            <div className={style.videoList}>
                {this.renderTitle()}
                {this.renderVideos()}
                {this.renderButton()}
                
            </div>
        )
    }

}

export default videosList

