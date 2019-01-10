import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
// import classnames from 'classnames';
import { Link } from 'react-router-dom';
import {deletePost,addLike,removeLike} from '../../actions/postAction';

class PostItems extends Component {
  onDeleteClick(id) {
   this.props.deletePost(id);
  }
  likepost(id){
    this.props.addLike(id);
  }
  unlikepost(id){
    this.props.removeLike(id);
  }
  render() {
    const { post, auth,showActions } = this.props;

    return (
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-2">
            <a href="profile.html">
              <img
                className="rounded-circle d-none d-md-block"
                src={post.avatar}
                alt=""
              />
            </a>
            <br />
            <p className="text-center">{post.name}</p>
          </div>
          <div className="col-md-10">
            <p className="lead">{post.text}</p>
          {showActions?(
            <span>
             <button
             onClick={this.likepost.bind(this,post._id)}
              type="button"
              className="btn btn-light mr-1"
            >
              <i
                className='fas fa-thumbs-up'
              />
              <span className="badge badge-light">{post.likes.length}</span>
            </button>
            <button
              onClick={this.unlikepost.bind(this,post._id)}
              type="button"
              className="btn btn-light mr-1"
            >
              <i className="text-secondary fas fa-thumbs-down" />
            </button>
            <Link to={`/post/${post._id}`} className="btn btn-success mr-1">
              Comments
            </Link>
            {post.user === auth.user.id ? (
              <button
                onClick={this.onDeleteClick.bind(this, post._id)}
                type="button"
                className="btn btn-danger mr-1"
              >
                <i className="fas fa-times" />
              </button>
            ) : null}</span>
          ):null}
              
               
              
          
          </div>
        </div>
      </div>
    );
  }
}

PostItems.defaultProps={
  showActions:true 
}

PostItems.propTypes = {
  removeLike:propTypes.func.isRequired,
  addLike:propTypes.func.isRequired,
  deletePost:propTypes.func.isRequired,
  post: propTypes.object.isRequired,
  auth: propTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {deletePost,addLike,removeLike})(PostItems);
