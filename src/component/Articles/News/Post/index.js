import React,{Component} from 'react'
import axios from 'axios'
import {URL} from '../../../../config'
import style from '../../articles.css'
import Header from './header'

class NewsArticle extends Component{
    state = {
        article : [],
        team: []

    }

    componentWillMount(){
        axios.get(`${URL}/articles?id=${this.props.match.params.id}`)
        .then(response=>{
            let article = response.data[0]

            axios.get(`${URL}/teams?id=${article.team}`)
            .then(response=>{
                this.setState({
                    article,
                    team : response.data
                })
            })
        
        })
    }

    render(){
        const article = this.state.article
        const team = this.state.team
        // console.log(team[0].team)
        
        // console.log(this.state)
        return(
            <div className={style.article}>
                <Header
                teamData = {team[0]}
                date={article.date}
                author={article.author}/>
                <br></br>
                <div className={style.articleBody}>
                    <h1>
                    {article.title}
                    </h1>
                    <div className={style.articleImage}
                        style={{
                            background:`url('/images/articles/${article.image}')`
                        }}>
                    </div>
                    <div className={style.articletext}>
                          {article.body}  
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsArticle

