import React, { Component } from "react";
import axios from "../../../axios"
import Post from "../../../components/Post/Post"
import  "./Posts.css"
import {Link} from "react-router-dom"

export default class Posts extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false,
  };
  componentDidMount() {
    axios
      .get("/posts")
      .then((res) => {
        const posts = res.data.slice(0, 4);
        const updatedPosts = posts.map((post) => {
          return {
            ...post,
            author: "max",
          };
        });
        this.setState({
          posts: updatedPosts,
        });
        // console.log("response JSON::::",this.state.posts)
      })
      .catch((error) => {
        console.log(error);
      });
  }
  postSelectedHandler = (id) => {
this.props.history.push("/"+id)
  };
  render() {
    let posts = (
      <p style={{ textAlign: "center" }}>Something went wrong...!!!!</p>
    );
    if (!this.state.error) {
      posts = this.state.posts.map((post) => (
    //    <Link to={'/'+ post.id}  key={post.id}>
       <Post
       key={post.id}
          title={post.title}
          author={post.author}
          clicked={() => this.postSelectedHandler(post.id)}
        />
        //<Link/>
      ));
    }
    return (
      <div>
        <section className="Posts">{posts}</section>
      </div>
    );
  }
}
