import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import PostItems from '../posts/PostItems';
import { Link } from 'react-router-dom';
import {getPost } from '../../actions/postAction';
import CommentFeed from './CommentFeed';
import Spinner from '../Spinner/spinner';
import CommentForm from './CommentForm';

class Post extends Component {

    componentDidMount(){
        this.props.getPost(this.props.match.params.id)
    }
  render() {
      const {post,loading}=this.props.post;
       let postContent;
       if(post===null||loading||Object.keys(post).length===0){
           postContent=<Spinner/>
       }
       else{
           postContent=(
               <div>
                   <PostItems post={post} showActions={false}/>
                   <CommentForm postId={post._id}/>
                   <CommentFeed postId={post._id} Comments={post.comments}/>
               </div>
           );
       }
    return (
        <div className="post">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
        <Link to='/feed' className='btn btn-light mb-3'>
        Back to feed
        </Link>
        {postContent}
        </div>
        </div>
        </div>
        </div>
    )
  }
}

Post.propTypes={
getPost:propTypes.func.isRequired,
post:propTypes.object.isRequired
}

const mapStateToProps=state=>({
    post:state.post
})
    

export default connect(mapStateToProps,{getPost})(Post);
