import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import {Route,Switch} from 'react-router-dom'
import Home from './component/Home/home'
import Layout from './hoc/Layout/layout'
import NewsArticle from './component/Articles/News/Post';
import VideoArticles from './component/Articles/Videos/Video';
import MainNews from './component/Articles/News/Main/MainNews';
import VideoMain from './component/Articles/Videos/Main/VideoMain';

class Routes extends Component {
    render(){
        return(
            <Layout >
                <Switch>
                     <Route path="/" exact component={Home}></Route>
                     <Route path="/news" exact component={MainNews}></Route>
                     <Route path="/articles/:id" exact component={NewsArticle}></Route>
                     <Route path="/videos/:id" exact component={VideoArticles}></Route>
                     <Route path="/videos" exact component={VideoMain}></Route>
                </Switch>
            </Layout>
        )
        
    }
}

export default Routes