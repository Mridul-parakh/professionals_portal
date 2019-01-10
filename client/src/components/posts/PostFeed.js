import React, { Component } from 'react';
import PostItems from './PostItems';

class PostFeed extends Component {
  render() {
      const {posts}=this.props;
    return posts.map(post=><PostItems key={post._id} post={post}/>)
  }
}

export default PostFeed;