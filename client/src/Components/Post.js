import React from 'react'
import PropTypes from 'prop-types';

function Post({postId, postTitle}) {
    return (
        <div className="card text-center">
  <div className="card-body">
    <h5 className="card-title">{postId}</h5>
    <p className="card-text">{postTitle}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    )
}

Post.defaultProps = {
    postId: 0,
    postTitle: ''
}

Post.propTypes = {
    postId: PropTypes.number,
    postTitle: PropTypes.string
}

export default Post
