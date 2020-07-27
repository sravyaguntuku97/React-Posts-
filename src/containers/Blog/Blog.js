import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from './FullPost/FullPost';
import './Blog.css';
import Posts from "../Blog/Posts/Posts"
// import axios from "axios"
import {Route,NavLink, Switch} from "react-router-dom"
import NewPosts from "../Blog/NewPost/NewPost"

class Blog extends Component {

    render () {
     
     
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink exact to="/" activeClassName="active-class" activeStyle={{color:"pink",textDecoration:"underline"}}>
                                    Posts</NavLink>
                            </li>
                            <li>
                                <NavLink to="/new-posts"
                                // {{
                                // pathname:"/new-posts",
                                // hash:"#submit",
                                // search:"?quick-submit=true"
                                //     }}
                                    >New Posts</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
            
                <Route path="/" exact component={Posts}/>
                <Switch>
                <Route path="/new-posts"  component={NewPosts}/>
                <Route path="/:id" exact component={FullPost}/>
                </Switch>
          
                {/* <Posts/> */}
                {/* <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;