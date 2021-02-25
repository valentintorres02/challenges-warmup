import React from 'react'
import PropTypes from 'prop-types';

function Post({postId, postTitle}) {
    return (
        <div className="card text-center">
  <div className="card-body">
    <h5 className="card-title">{postId}</h5>
    <p className="card-text">{postTitle}</p>
    <a href={`/edit/${postId}`} className="btn btn-warning" style={{marginRight: '5px'}}>Editar</a>
    <a href={`/posts/${postId}`} onClick={() => {console.log(postId)}} className="btn btn-primary" style={{marginRight: '5px'}}>Ver detalle</a>
    <a href="#"  onClick={() => {if(confirm(`Deseas borrar el post ID ${postId}?`)){console.log(`Post ${postId} eliminado.`)}}}
    className="btn btn-danger" style={{marginRight: '5px'}}>Eliminar</a>
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
