import React, { Component } from "react";
import "./FullPost.css";
import axios from "axios";

class FullPost extends Component {
    state={
        loadedPost:null
    }
  componentDidMount() {
    // const id = this.params
    if (this.props.match.params.id) {
        if(!this.state.loadedPost||this.state.loadedPost && this.state.loadedPost.id !== this.props.id) {
            axios
            .get("/posts/" + this.props.match.params.id)
            .then((res) => {
              const post = res.data;
               this.setState({
                loadedPost: post,
              });
     
            });
        }
    }
  }

  deletePostHandler=()=>{
    axios
    .delete("/posts/" + this.props.id)
    .then(res=>{
    console.log(res)
    })
  }
  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if(this.props.id){
        post = <p style={{ textAlign: "center" }}>Post Loading....!!!</p>;
    }
    if(this.state.loadedPost){
        post = (
          <div className="FullPost">
            <h1>{this.state.loadedPost.title}</h1>
            <p>{this.state.loadedPost.body}</p>
            <div className="Edit">
              <button onClick={this.deletePostHandler} className="Delete">Delete</button>
            </div>
          </div>
        )
    }

    return post;
  }
}

export default FullPost;
