import React,{Component} from 'react'
import {CSSTransition,TransitionGroup} from 'react-transition-group'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {URL} from '../../../config'
import style from './newsList.css'
import Button from '../Buttons/button'
import CardInfo from '../CardInfo/cardInfo'

class NewsList extends Component{
    state = {
        teams:[],
        items : [],
        start : this.props.start,
        end : this.props.end,

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

        axios.get(`${URL}/articles?_start=${start}&_end=${end}`)
        .then(response=>{
            this.setState({
                items : [...this.state.items,...response.data],
                start,
                end
            })
        })
    }

    loadMore = ()=>{
        let end = this.state.end + (this.state.end-this.state.start)
        this.request(this.state.end,end)
    }

    renderNews= (type) =>{
        let template = null

        switch(type){
            case('card'):
                template = this.state.items.map((item,i)=>{
                    return(
                        <CSSTransition
                         classNames={{
                             enter : style.newsList_wrapper,
                             enterActive : style.newsList_wrapper_enter
                         }}
                         timeout = {500}
                         key={i}>
                        <div>
                            <div className={style.newsListItem}>
                                <Link to={`articles/${item.id}`}>
                                
                                    <CardInfo teams={this.state.teams} team={item.team} date={item.date}/>
                                    <h2>
                                        {item.title}
                                    </h2>
                                </Link>
                            </div>
                        </div>
                        </CSSTransition>
                    )
                })
                break

            default:
                template = null    


        }

        return template
    }
    render()
    {
        // console.log(this.state.items)
        return(
            <div>
                <TransitionGroup
                component="div"
                className="list">
                {this.renderNews(this.props.type)}
                </TransitionGroup>

                <Button
                type="Load More"
                loadMore = {()=>this.loadMore()}
                cta="LOAD MORE NEWS"/>
                
            </div>
        )
    }
}

export default NewsList