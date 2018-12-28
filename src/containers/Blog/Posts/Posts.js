import React,{ Component } from 'react';
import './Posts.css';//Different syntax because we are not using css module withErrorHandler
import Post from '../../../components/Post/Post';
import axios from '../../../axios.js';


class Posts extends Component{
  state ={
    posts: [],
  }
  componentDidMount () {
    //Use promise to wait for the response, because JavaScript will not wait for the result to execut the next line
    axios.get('/posts')
        .then(response =>{
          const posts = response.data.slice(0,4);
          const updatedPosts = posts.map(post => {
            return {
              ...post,
              author: 'Max'
            }
          });
          this.setState({posts: updatedPosts});
          // console.log(this.state.posts);
        })
        .catch(error => {
          console.log(error);
          this.setState({error: true});
        })
  }
  selectedPostHandler = (id) => {
    this.setState({selectedPost: id});
  }
  render () {
    let curposts = <p style={{textAlign: 'center'}}>Something went wrong!</p>
    if(!this.state.error){
        curposts = this.state.posts.map(post => {
        return <Post
                  key={post.id}
                  title={post.title}
                  author={post.author}
                  clicked={() => this.selectedPostHandler(post.id)}/>
      });
    }
    return (
      <section className="Posts">
        {curposts}
      </section>
    );
  }
}

export default Posts;
