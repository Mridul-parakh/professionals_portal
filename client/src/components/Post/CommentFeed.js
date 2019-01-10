import React, { Component } from 'react';
import propTypes from 'prop-types'; 
import CommentItem from './CommentItem';

class CommentFeed extends Component {
  render() {
      const {Comments,postId}=this.props;
    return Comments.map(comment=><CommentItem key={comment._id} comment={comment} postId={postId}/>)
  }
}

CommentFeed.propTypes={
    Comments:propTypes.object.isRequired,
    postId:propTypes.object.isRequired
}

export default CommentFeed;
